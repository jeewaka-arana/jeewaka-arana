import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';


@Component({
  selector: 'app-img1',
  templateUrl: './img1.component.html',
  styleUrls: ['./img1.component.scss']
})
export class Img1Component implements OnInit {
  files1: File[] =[];
  files2: File[]=  [];

  onDrop1(files1: FileList) {
    for (let k = 0; k <1; k++) {
      this.files1.push(files1.item(k));
    }
  }
  img1 : string;
  selectedImage1:any;
  isSubmitted1:boolean;

  
formdata=new FormGroup({ 
  img1:new FormControl(''),

  

 });
  constructor() { }

  ngOnInit() {
    this.formdata;
  }
  showpreview1(event1:any){
    if(event1.target1.files1 && event1.target1.files2[0]){
      const reader = new FileReader();
      reader.onload=(e:any)=> this.img1 = e.target1.result;
      reader.readAsDataURL(event1.target1.files2[0]);
      this.selectedImage1 =event1.target1.files2[0];
    }
    else{
      this.img1 ='../../../assets/img/avatar.png';
      this.selectedImage1 = null;
    }
 
  }



}
