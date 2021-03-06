import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Usuario } from '@models/usuario';
import { AlumnosService } from '@services/alumnos.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  defaultImagePath = 'assets/images/User_icon.png';
  profileImageUrl = 'http://localhost:9090/uploads/';
  id: string;
  user: Usuario;
  rol: string;
  uploadImage: string;
  constructor(private auth: AuthService, private camera: Camera, private alumnoService: AlumnosService) { }

  ngOnInit() {

    if (this.auth.usuario) {
      this.user = this.auth.usuario;
      this.rol = this.auth.rol;
      this.profileImageUrl = this.user.photoUrl ? this.profileImageUrl + this.user.photoUrl : '';
    } else {
      this.auth.user.subscribe(data => {
        this.user = data;
        this.rol = this.auth.rol;
        this.profileImageUrl = this.user.photoUrl ? this.profileImageUrl + this.user.photoUrl : '';
      });
    }
  }

  openCamera() {
    const options: CameraOptions = {
      quality: 30,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      const base64Image = 'data:image/jpeg;base64,' + imageData;
      this.uploadImage = base64Image;
      this.alumnoService.addPhoto(this.user.id, imageData).subscribe(data => {
      });
    }, (err) => {
      // Handle error
    });
  }

}
