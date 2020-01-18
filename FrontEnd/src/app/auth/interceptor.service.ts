import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { from, Observable, throwError } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Constantes } from '../global/constantes';
import { AuthService } from './auth.service';

const TOKEN_KEY = 'auth-token';
@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private storage: Storage,private auth:AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return from(this.storage.get(Constantes.TOKEN_KEY))
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
                                token = event.headers.get('Authorization');
                                if (token) {
                                  this.storage.set(TOKEN_KEY, token);
                                }
                            }
                            return event;
                        }),
                        catchError((error: HttpErrorResponse) => {
                            console.log(error);
                            const status =  error.status;
                            if (status === 403) {
                                this.storage.remove(Constantes.TOKEN_KEY);
                                this.auth.logout();
                            }
                            return throwError(error);
                        })
                    );
                })
            );


    }
}
