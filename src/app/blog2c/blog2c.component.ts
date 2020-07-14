import { Component, OnInit } from '@angular/core';
import { AngularFirestore,  AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable} from 'rxjs/Rx';
import { Router } from '@angular/router';
import {
  AngularFireStorage,
  AngularFireStorageReference,
} from '@angular/fire/storage';
import { UploadFileService } from '../core/upload-file.service';
import { AuthService } from 'app/core/auth.service';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import { finalize, tap } from 'rxjs/operators';
import { Location } from '@angular/common';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
export interface articleif{
  title:String;
  description:String;
  imageUrl:String;
  date:Date;
  category:String;
  comment:String; 
}
export interface usercom{
  name:String;
  comment:String;
  replycomment:String;
}

@Component({
  selector: 'app-blog2c',
  templateUrl: './blog2c.component.html',
  styleUrls: ['./blog2c.component.scss']
})
export class Blog2cComponent implements OnInit {
  isCollapsed: boolean = true;
  fileUploads: any[];
  results: any[] = [];
  new:String;

  authError: any;
  uploadPercent: Observable<number>;
  tempid :String;
  downloadURL: Observable<string>;
  ref: AngularFireStorageReference;
  files: File[] = [];
  file: Observable<any>;
  tit:String;
  comm:String;
  descript:String;
  r: any[] = [];
  isDisplay:boolean=false;
  isShow:boolean=false;

  Atitle:String;
  closeResult: string;
  private ArticleDoc:AngularFirestoreCollection<articleif>;
  artcles:Observable<articleif[]>;

  private ArticleImg:AngularFirestoreCollection<articleif>;
  artclesimg:Observable<articleif[]>;

  private comDoc:AngularFirestoreCollection<usercom>;
  com:Observable<usercom[]>;

  constructor(private afs: AngularFirestore, private location: Location,private router: Router, private afStorage: AngularFireStorage,private fb: FormBuilder, private modalService: NgbModal,private uploadService: UploadFileService,private auth:AuthService) { 
    
    this.comDoc=this.afs.collection<usercom>('usercomment');
    this.com=this.comDoc.snapshotChanges().pipe(
      map(actions=>actions.map(results=>{
     const data=results.payload.doc.data() as usercom ;
     const id=results.payload.doc.id;
     
     return{id,...data};
    
      }))
    )

    this.ArticleDoc=this.afs.collection<articleif>('Article',ref => ref.where('selectAs','==','Article'));
    this.artcles=this.ArticleDoc.snapshotChanges().pipe(
   map(actions=>actions.map(results=>{
  const data=results.payload.doc.data() as articleif ;
  const id=results.payload.doc.id;
  
  return{id,...data};
 
   }))
 )
 this.ArticleImg=this.afs.collection<articleif>('Article',ref => ref.where('selectAs','==','Photo'));
 this.artclesimg=this.ArticleImg.snapshotChanges().pipe(
 map(actions=>actions.map(results=>{
const data=results.payload.doc.data() as articleif ;
 const id=results.payload.doc.id;
 return{id,...data};

}))
)
    
  }

  ngOnInit() {
 
     this.uploadService.getFileUploads(6).snapshotChanges().map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
      }).subscribe(fileUploads => {
        this.fileUploads = fileUploads;
      });
      
  }
  Createdoc(id,title,description){
    console.log(id);
    console.log(title);
    console.log(description); 
      this.afs.collection('Article').doc(id).update({
        title:title,
        description:description
      }).then(x=>{
        return alert("Article is updated")
          setTimeout(()=>(1000))

      }).catch(error=>{
        console.log("This is the error of updating query of changing state of doctor"+error);
    })   
  }

  Delete(id){
    this.afs.collection('Article').doc(id).delete().then(function(){
      console.log("Article successfully deleted");
      setTimeout(()=>(100));
       return alert("Article is deleted");

    }).catch(function(error){
      console.error("Error:",error);
    });
    
  }
  
  open(content, type, modalDimension) {
    if (modalDimension === 'sm' && type === 'modal_mini') {
        this.modalService.open(content, { windowClass: 'modal-mini modal-primary', size: 'sm' }).result.then((result) => {
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


  
displaysession(){
    this.isDisplay=!this.isDisplay;
  }

toggleDisplay(){
    this.isShow=!this.isShow;
}
add(id){
  console.log(this.comm);
  this.afs.collection('usercomment').doc(id).update({'replycomment':this.comm,'state':1});
  
  this.comm=""; 
  this.isDisplay=!this.isDisplay;
}

change(){
  this.router.navigateByUrl('blogc')
}

}

