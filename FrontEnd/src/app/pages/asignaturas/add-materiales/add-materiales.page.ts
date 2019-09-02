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
  }

  guardar(){
    let mat:Materiales = new Materiales(null,this.titulo,this.content);
    this.asigService.createMaterial(this.route.snapshot.paramMap.get('id'),mat)
    .subscribe(
      ()=>{this.router.navigate(["/asignaturas/",this.route.snapshot.paramMap.get('id')])}
    )
  }

  doUpload(files: Array<File>): Promise<Array<UploadResult>> {
    return new Promise((resolve, reject) => {
      
    });
  }
  

  hidePreview(e) { console.log(e.getContent()); }

}
