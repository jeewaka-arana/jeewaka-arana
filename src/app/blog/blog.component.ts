import { Component, OnInit } from '@angular/core';
import { AngularFirestore,  AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable} from 'rxjs/Rx';
import { Router } from '@angular/router'
import {
  AngularFireStorage,
  AngularFireStorageReference,
} from '@angular/fire/storage';
import { UploadFileService } from '../core/upload-file.service';
import { AuthService } from 'app/core/auth.service';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { Location } from '@angular/common';
import { Article } from 'app/core/models/article.model';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
export interface articleif{
  title:String;
  description:String;
  Doctorname:String;
  imageUrl:String;
  date:Date;
  category:String;
  comment:String; 
}

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  isCollapsed: boolean = true;
  fileUploads: any[];
  results: any[] = [];
  r: any[] = [];
  res:any[]=[];
  new:String;

  authError: any;
  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;
  ref: AngularFireStorageReference;
  files: File[] = [];
  file: Observable<any>;
  tit:String;
  descript:String;
  isShow:boolean=false;
  isDisplay:boolean=false;
  show:boolean;
  private artiDoc:AngularFirestoreDocument<Article>;
  art: Observable<Article>;
  closeResult: string;
  name:String;
  articlecomment:String;
  comm:String;
  imageList:any[];
  rowIndexArray:any[];
  a:any[]=[];
  row:any[];
  rowa:any[];

  category:String;
  QueryCol:AngularFirestoreCollection<articleif>;
  Query:Observable<articleif[]>

  
  constructor(private afs: AngularFirestore, private location: Location,private afStorage: AngularFireStorage,
    private fb: FormBuilder, private modalService: NgbModal,private uploadService: UploadFileService,private auth:AuthService,private router:Router) { 
     
    }

  ngOnInit() {
    this.afs.collection("Article",ref => ref.where('selectAs','==','Article')).valueChanges().subscribe(results => {
      this.results = results;
      this.rowa= Array.from(Array(Math.ceil(this.results.length/2)).keys());
    })
  
   
    this.afs.collection("Article",ref => ref.where('selectAs','==','Photo')).valueChanges().subscribe(a=> {
      this.a = a.map(item=>{return item;});
      this.row= Array.from(Array(Math.ceil(this.a.length/2)).keys());    
    })
    

    this.afs.collection('usercomment',ref => ref.limit(10)).valueChanges().subscribe(res => {
      this.res = res;  
    })
  }
 
toggleDisplay(){
    this.isShow=!this.isShow;
}


open(content, type, modalDimension) {
  if (modalDimension === 'lg' && type === 'modal_mini') {
      this.modalService.open(content, { windowClass: 'modal-mini modal-primary', size: 'lg' }).result.then((result) => {
          this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
  } else if (modalDimension == undefined && type === 'Login') {
    this.modalService.open(content, { windowClass: 'modal-login modal-primary' }).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  } else {
      this.modalService.open(content).result.then((result) => {
          this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
  }

}

private getDismissReason(reason: any): string {
  if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
  } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
  } else {
      return  `with: ${reason}`;
  }
}

Comment(){
  this.afs.collection('usercomment').add({'name':this.name, 'comment':this.comm,'state':0});
  this.name='';
  this.comm='';
  
}
displaysession(){
  this.isDisplay=!this.isDisplay;
}

}
