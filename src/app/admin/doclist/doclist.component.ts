import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/core/auth.service';
import {CrudService} from 'app/core/crud.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


export interface doctor{
    email:string;
    firstName:string
    lastName:string
    phone:string
    nic:string
    city:string
    position:string
    regnumber:string
    years:number
    uid:string
}


@Component({
  selector: 'app-doclist',
  templateUrl: './doclist.component.html',
  styleUrls: ['./doclist.component.scss']
})


export class DoclistComponent implements OnInit {
  items: Array<any>;
  closeResult: string;
  frm:any;
  private doctorDoc: AngularFirestoreDocument<doctor>;
  doctors:Observable< doctor[]>;
  doct$:any;

  constructor(private auth: CrudService,private modalService: NgbModal,private afs:AngularFirestore,private router: Router) {
    
   }

  ngOnInit() {

    
    this.auth.getPeople().then(result =>{
      this.items=result;
    })
    // .then(result => {
    //   this.items = result;
    // })

    
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



Createdoc(id:string){
    console.log(id);
   this.doctorDoc = this.afs.doc<any>('user/VO23vtfHaiULH2bhwYvZ');
    this.doctors = this.doctorDoc.collection<doctor>('Doctors').valueChanges();
//    this.docCol= this.afs.collection('admin').doc('VO23vtfHaiULH2bhwYvZ').collection('Doctors');
//    this.doctors=this.docCol.valueChanges();
//    this.docCol.doc(id).ref.get().then((doc)=>{
//        this.doct$=doc.data();
//    })
    
}


accept(id:string){
console.log(id);
 this.afs.collection('admin').doc('VO23vtfHaiULH2bhwYvZ').collection('Doctors').doc(id).delete();
 this.router.navigate(['/admin/doclist']); 





}
 
}
