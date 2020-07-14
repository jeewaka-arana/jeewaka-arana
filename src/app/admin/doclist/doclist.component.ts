import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/core/auth.service';
import {CrudService} from 'app/core/crud.service';
@Component({
  selector: 'app-doclist',
  templateUrl: './doclist.component.html',
  styleUrls: ['./doclist.component.scss']
})
export class DoclistComponent implements OnInit {
  items: Array<any>;
  constructor(private auth: CrudService) {
    
   }

  ngOnInit() {
    this.auth.getPeople()
    .then(result => {
      this.items = result;
    })
  }

<<<<<<< Updated upstream
=======
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
   
  
    this.afs.collection('admin').doc('VO23vtfHaiULH2bhwYvZ').collection('Doctors').doc(id).update({state:1}).then(x=>{
        return alert("Doctor registered")
        setTimeout(()=>(1000))

    }).catch(error=>{
        console.log("This is the error of updating query of changing state of doctor"+error);
    })
   // this.doctorDoc = this.afs.doc<any>('user/VO23vtfHaiULH2bhwYvZ');
    //this.doctors = this.doctorDoc.collection<doctor>('Doctors').valueChanges();
//    this.docCol= this.afs.collection('admin').doc('VO23vtfHaiULH2bhwYvZ').collection('Doctors');
//    this.doctors=this.docCol.valueChanges();
//    this.docCol.doc(id).ref.get().then((doc)=>{
//        this.doct$=doc.data();
//    })
    
}
>>>>>>> Stashed changes
 
}
