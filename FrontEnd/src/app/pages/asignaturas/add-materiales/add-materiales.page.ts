import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Materiales } from '@models/materiales';
import { MaterialesService } from '@services/materiales.service';
interface UploadResult {
  isImg: boolean;
  name: string;
  url: string;
}
@Component({
  selector: 'app-add-materiales',
  templateUrl: './add-materiales.page.html',
  styleUrls: ['./add-materiales.page.scss'],
})
export class AddMaterialesPage implements OnInit {
  matId = null;
  asigId = null;
  sectionId = null;
  titulo = '';
  mode = 'editor';
  orden = 0;

  content = `
  # Titulo
  ## Subtitulo
  ---

  > seccion

  daadsada

  \`\`\`Java
  System.out.println("Hello world");
  \`\`\`

  ![Foto](https://www.stickpng.com/assets/images/5848093ccef1014c0b5e48fc.png)

   <table class="table table-stripped">
      <thead class="thead-dark">
          <th>Nombre</th>
          <th>Apellidos</th>
      </thead>
      <tbody>
          <tr>
              <td>Juan</td>
              <td>Martinez</td>
          </tr>
      </tbody>
   </table>

  |Nombre|Apellidos|
  |--|--|
  |Juan|Martinez|
  `;
  options = {
    resizable: true,
    scrollPastEnd: 0,
  };
  constructor(private materialesService: MaterialesService, private route: ActivatedRoute, private router: Router) {   }

  ngOnInit() {
    this.matId = this.route.snapshot.paramMap.get('idMat');
    this.asigId = this.route.snapshot.paramMap.get('id');
    if (this.matId != null) {
      this.materialesService.getMaterial(this.matId).subscribe(
        data => {
          this.titulo = data.titulo;
          this.content = data.contenido;
          this.orden = data.orden;
        }
      );
    } else {
      this.sectionId = this.router.getCurrentNavigation().extras.state.sectionId;
    }
  }

  guardar() {
    const mat: Materiales = new Materiales(this.matId, this.titulo, this.content);
    mat.orden = this.orden;
    if (this.matId == null) {
      this.materialesService.createMaterial(this.sectionId, mat).subscribe(() => {
        this.router.navigateByUrl('/asignaturas/' + this.asigId);
        //this.router.navigate(['/asignaturas/', this.asigId]);
      });
    } else {
      this.materialesService.updateMaterial(mat).subscribe(() => {this.router.navigate(['/asignaturas/', this.asigId]); });
    }
  }

  doUpload(files: Array<File>): Promise<Array<UploadResult>> {
    return new Promise((resolve, reject) => {

    });
  }


  hidePreview(e) { console.log(e.getContent()); }

}
