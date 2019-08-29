import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-materiales',
  templateUrl: './add-materiales.page.html',
  styleUrls: ['./add-materiales.page.scss'],
})
export class AddMaterialesPage implements OnInit {

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
    enablePreviewContentClick: false,
    scrollPastEnd:10,
  };
  constructor() { }

  ngOnInit() {
  }

  guardar(){
    console.log(this.content)
  }

  hidePreview(e) { console.log(e.getContent()); }

}
