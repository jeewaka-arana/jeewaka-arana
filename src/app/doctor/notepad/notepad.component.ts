import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notepad',
  templateUrl: './notepad.component.html',
  styleUrls: ['./notepad.component.scss']
})
export class NotepadComponent implements OnInit {

  files: File[] = [];
  files1: File[]=  [];

  onDrop(files: FileList) {
    for (let i = 0; i < files.length; i++) {
      this.files.push(files.item(i));
    }
  }
  
  onDrop1(files1: FileList) {
    for (let k = 0; k < files1.length; k++) {
      this.files1.push(files1.item(k));
    }
  }



  img : string;
  img1:string;
  selectedImage:any;
  image1:any;
  isSubmitted:boolean;
  isSubmitted1:boolean;


  constructor() { }

  ngOnInit() {
  }





  
  showpreview(event:any){
    if(event.target.files && event.target.files[0]){
      const reader = new FileReader();
      reader.onload=(e:any)=> this.img = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage =event.target.files[0];
    }
    else{
      this.img ='../../../assets/img/avatar.png';
      this.selectedImage = null;
    }
 
  }

  showpreview1(event:any){
        if(event.target.files && event.target.files[0]){
          const reader = new FileReader();
          reader.onload=(e:any)=> this.img1 = e.target.result;
          reader.readAsDataURL(event.target.files[0]);
          this.image1 =event.target.files[0];
        }
        else{
          this.img1 ='../../../assets/img/avatar.png';
          this.image1 = null;
        }
     
      }


}
