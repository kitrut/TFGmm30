import { Component, OnInit } from '@angular/core';
import { AsignaturasService } from 'src/app/services/asignaturas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Materiales } from 'src/app/models/materiales';
interface UploadResult {
  isImg: boolean
  name: string
  url: string
}
@Component({
  selector: 'app-add-materiales',
  templateUrl: './add-materiales.page.html',
  styleUrls: ['./add-materiales.page.scss'],
})
export class AddMaterialesPage implements OnInit {
  matId=null;
  asigId=null;
  titulo="";
  content=`
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
  options={
    resizable:true,
    scrollPastEnd: 0,
  };
  constructor(private asigService:AsignaturasService,private route: ActivatedRoute,private router:Router) {   }

  ngOnInit() {
    this.matId = this.route.snapshot.paramMap.get('idMat');
    this.asigId = this.route.snapshot.paramMap.get('id');
    if(this.matId != null){
      this.asigService.getMaterial(this.asigId,this.matId).subscribe(
        data=>{
          this.titulo = data.titulo;
          this.content = data.contenido;
        }
      )
    }
  }

  guardar(){
    let mat:Materiales = new Materiales(this.matId,this.titulo,this.content);
    if(this.matId==null)
      this.asigService.createMaterial(this.asigId,mat).subscribe(()=>{this.router.navigate(["/asignaturas/",this.asigId])})
    else
      this.asigService.createMaterial(this.asigId,mat).subscribe(()=>{this.router.navigate(["/asignaturas/",this.asigId])})
  }

  doUpload(files: Array<File>): Promise<Array<UploadResult>> {
    return new Promise((resolve, reject) => {
      
    });
  }
  

  hidePreview(e) { console.log(e.getContent()); }

}
