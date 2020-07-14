import { Component, OnInit } from '@angular/core';
import { AngularFirestore,  AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AuthService } from 'app/core/auth.service';
import { Article } from 'app/core/models/article.model';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-art2',
  templateUrl: './art2.component.html',
  styleUrls: ['./art2.component.scss']
})
export class Art2Component implements OnInit {
  results: any[] = [];
  res:any[]=[];
  closeResult: string;
  name:String;
  comment:String;
  isShow:boolean=false;
  constructor(private afs: AngularFirestore, private modalService: NgbModal) { 

  }

  ngOnInit() {
    /* this.afs.collection("Article",ref => ref.limit(8)).valueChanges().subscribe(results => {
    this.results = results;
  
  })*/
      this.afs.collection('Article',ref => ref.limit(10)).valueChanges().subscribe(results => {
      this.results = results;
    
    })
    this.afs.collection('usercomment',ref => ref.limit(10)).valueChanges().subscribe(res => {
        this.res = res;
      
      })
  }
  toggleDisplay(){
      this.isShow=!this.isShow;
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
Comment(name:String,comment:String){
    this.afs.collection('usercomment').add({'name':name, 'comment':comment});
    /*addIssue(){
    this.afs.collection('Issues').add({'name': this.name, 'email': this.email, 'issue': this.issue});
  }*/ 
}
}
