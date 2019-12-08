import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AsignaturasService } from 'src/app/services/asignaturas.service';
import { Materiales } from 'src/app/models/materiales';

@Component({
  selector: 'app-view-material',
  templateUrl: './view-material.page.html',
  styleUrls: ['./view-material.page.scss'],
})
export class ViewMaterialPage implements OnInit {

  titulo = '';
  mode = 'preview';
  material: Materiales = new Materiales(null, null, null);
  content = this.material.contenido;
  options = {
    resizable: true,
    enablePreviewContentClick: true
  };
  constructor(private route: ActivatedRoute, private asignaturaService: AsignaturasService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    const idMat = this.route.snapshot.paramMap.get('idMat');
    this.asignaturaService.getMaterial(id, idMat).subscribe(
      data => {
        this.material = data;
        this.titulo = data.titulo;
        this.content = data.contenido;
      }
    );
  }

}
