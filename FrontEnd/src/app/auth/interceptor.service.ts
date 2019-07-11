import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { from, Observable, throwError } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';


const TOKEN_KEY = 'auth-token';
@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {
  
  protected url   = 'http://localhost:9090';

  constructor(private storage: Storage,private router:Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return from(this.storage.get(TOKEN_KEY))
            .pipe(
                switchMap(token => {
                    //si tiene el token, lo añade a las cabeceras de todas las peticiones
                    if (token) {
                      req = req.clone({ headers: req.headers.set('Authorization', token) });
                    }

                    if (!req.headers.has('Content-Type')) {
                      req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
                    }

                    return next.handle(req).pipe(
                        map((event: HttpEvent<any>) => {
                            if (event instanceof HttpResponse) {
                                //captura el token de la respuesta del servidor
                                this.storage.set(TOKEN_KEY,event.headers.get("Authorization"))
                            }
                            return event;
                        }),
                        catchError((error: HttpErrorResponse) => {
                            
                            const status =  error.status;
                            if(status == 403){
                                this.storage.remove(TOKEN_KEY)
                                this.router.navigateByUrl("/")
                            }
                            return throwError(error);
                        })
                    );
                })
            );


    }
}
