import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notepad',
  templateUrl: './notepad.component.html',
  styleUrls: ['./notepad.component.scss']
})
export class NotepadComponent implements OnInit {
  files: File[] = [];
  onDrop(files: FileList) {
    for (let i = 0; i < files.length; i++) {
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


}
