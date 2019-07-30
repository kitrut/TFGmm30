import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfesoresService } from 'src/app/services/profesores.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  id: string;
  profesor:{} = null;

  constructor(private route: ActivatedRoute, private profesorService:ProfesoresService) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.profesor = this.profesorService.findById(this.id);
  }

}
