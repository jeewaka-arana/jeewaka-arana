import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
  files: File[] =[];
  

  onDrop(files: FileList) {
    for (let i = 0; i <1; i++) {
      this.files.push(files.item(i));
    }
  }
  img : string;
  selectedImage:any;
  isSubmitted:boolean;

  
formdata=new FormGroup({ 
  img:new FormControl(''),

  

 });
  constructor() { }

  ngOnInit() {
    this.formdata;
  }
  showpreview(event:any){
    if(event.target.files && event.target.files[0]){
      const reader = new FileReader();
      reader.onload=(e:any)=> this.img = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage =event.target.files[0];
    }
    // else{
    //   this.img ='https://www.babypointgates.ca/new/wp-content/uploads/2016/02/doctor10.png';
    //   this.selectedImage = null;
    // }
 
  }



}
