import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { v4 } from 'uuid';
import { forkJoin } from 'rxjs';
import { mergeMap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { async } from 'q';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  files: File[] =[];
  // files1: File[]=  [];

  //
   
  //
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




}
