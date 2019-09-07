import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  id:string;
  user:Usuario;
  rol:string;
  
  processing: boolean;
  uploadImage: string;
  constructor(private auth:AuthService) { }

  ngOnInit() {
    this.user = this.auth.usuario;
    this.rol = this.auth.rol;
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
