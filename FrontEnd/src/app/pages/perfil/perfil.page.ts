import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { AuthService } from 'src/app/auth/auth.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  id: string;
  user: Usuario;
  rol: string;

  processing: boolean;
  uploadImage: string;
  constructor(private auth: AuthService, private camera: Camera) { }

  ngOnInit() {

    if (this.auth.usuario) {
      this.user = this.auth.usuario;
      this.rol = this.auth.rol;
    } else {
      this.auth.user.subscribe(data => {
        this.user = data;
        this.rol = this.auth.rol;
      });
    }
  }

  presentActionSheet(fileLoader) {
    fileLoader.click();
    const that = this;
    fileLoader.onchange = () => {
      const file = fileLoader.files[0];
      const reader = new FileReader();

      reader.addEventListener('load', () => {
        that.processing = true;
        that.uploadImage = reader.result.toString();
      }, false);
      if (file) {reader.readAsDataURL(file); }
    };
  }

  imageLoaded() {
    this.processing = false;
  }

  removePic() {
    this.uploadImage = null;
  }

  openCamera(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      console.log(base64Image);
     }, (err) => {
      // Handle error
     });
  }

}
