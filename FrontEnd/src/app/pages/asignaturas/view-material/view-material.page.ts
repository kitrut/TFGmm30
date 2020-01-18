import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Materiales } from 'src/app/models/materiales';
import { MaterialesService } from 'src/app/services/materiales.service';

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
  constructor(private route: ActivatedRoute, private materialesService: MaterialesService) { }

  ngOnInit() {
    const idMat = this.route.snapshot.paramMap.get('idMat');
    this.materialesService.getMaterial(idMat).subscribe(
      data => {
        this.material = data;
        this.titulo = data.titulo;
        this.content = data.contenido;
      }
    );
  }

}
