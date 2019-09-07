import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfesoresService } from 'src/app/services/profesores.service';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  id:string;
  user:Usuario;
  processing: boolean;
  uploadImage: string;
  constructor(private route: ActivatedRoute, private profesorService:ProfesoresService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.profesorService.getById(this.id).subscribe(data=>this.user = data);
  }

  presentActionSheet(fileLoader) {
    fileLoader.click();
    var that = this;
    fileLoader.onchange = ()=>{
      var file = fileLoader.files[0];
      var reader = new FileReader();

      reader.addEventListener("load", function () {
        that.processing = true;
        that.uploadImage = reader.result.toString();
      },false);
      if (file) {reader.readAsDataURL(file);}
    }
  }
  imageLoaded() {
    this.processing = false;
  }
  
  removePic() {
    this.uploadImage = null;
  }

}
