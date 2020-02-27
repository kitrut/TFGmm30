import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Materiales } from '@models/materiales';
import { MaterialesService } from '@services/materiales.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
  sectionId = null;
  mode = 'editor';

  materialForm = new FormGroup({
    id: new FormControl(null),
    titulo: new FormControl('', Validators.required),
    orden: new FormControl(0),
    contenido: new FormControl('')
  });

  options = {
    resizable: true,
    scrollPastEnd: 0,
  };
  constructor(private materialesService: MaterialesService, private route: ActivatedRoute, private router: Router) {   }

  ngOnInit() {
    this.matId = this.route.snapshot.paramMap.get('idMat');
    if (this.matId != null) {
      this.materialesService.findById(this.matId).subscribe(
        data => this.materialForm.patchValue(data)
      );
    } else {
      this.sectionId = this.router.getCurrentNavigation().extras.state.sectionId;
    }
  }

  guardar() {


    const asigId = this.route.snapshot.paramMap.get('id');

    if (this.matId == null) {
      this.materialesService.create(this.sectionId, this.materialForm.value).subscribe(() => {
        this.router.navigateByUrl('/asignaturas/' + asigId);
      });
    } else {
      this.materialesService.update(this.materialForm.value).subscribe(() => {
        this.router.navigate(['/asignaturas/', asigId]);
      });
    }
  }

  doUpload(files: Array<File>): Promise<Array<UploadResult>> {
    return new Promise((resolve, reject) => {

    });
  }


  hidePreview(e) { console.log(e.getContent()); }

}
