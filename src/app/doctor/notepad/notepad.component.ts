import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-notepad',
  templateUrl: './notepad.component.html',
  styleUrls: ['./notepad.component.scss'],
  
})
export class NotepadComponent implements OnInit {
  files: File[] =[];
  files1: File[]=  [];

  onDrop(files: FileList) {
    for (let i = 0; i <1; i++) {
      this.files.push(files.item(i));
    }
  }
  img : string;
  selectedImage:any;
  isSubmitted:boolean;
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

  //  showpreview1(event:any){
  //       if(event.target.files && event.target.files[0]){
  //         const reader = new FileReader();
  //         reader.onload=(e:any)=> this.img1 = e.target.result;
  //         reader.readAsDataURL(event.target.files[0]);
  //         this.image1 =event.target.files[0];
  //       }
  //       else{
  //         this.img1 ='../../../assets/img/avatar.png';
  //         this.image1 = null;
  //       }
     
  //     }


}
