import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-material',
  templateUrl: './view-material.page.html',
  styleUrls: ['./view-material.page.scss'],
})
export class ViewMaterialPage implements OnInit {

  content="";
  mode="preview";
  options={
    resizable:true,
    enablePreviewContentClick: false,
    hideIcons:['Bold', 'Italic', 'Heading', 'Refrence', 'Link', 'Image', 'Ul', 'Ol', 'Code', 'TogglePreview'],
    showBorder:false,
    scrollPastEnd:2
  };
  constructor() { }

  ngOnInit() {
  }

}
