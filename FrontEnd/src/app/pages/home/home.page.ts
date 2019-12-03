import { Component, OnInit } from '@angular/core';
import { AnunciosService } from 'src/app/services/anuncios.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  anuncios = [];
  constructor(private anuncioService: AnunciosService) {}

  ngOnInit(): void {
    this.anuncioService.getAll().subscribe(
      data => {
        this.anuncios = data;
      }
    );
  }

}
