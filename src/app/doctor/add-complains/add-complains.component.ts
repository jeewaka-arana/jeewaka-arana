import { Component, OnInit } from '@angular/core';
import{CrudService} from 'app/core/crud.service';
import { FormGroup, FormControl } from '@angular/forms';
import * as Rellax from 'rellax';
@Component({
  selector: 'app-add-complains',
  templateUrl: './add-complains.component.html',
  styleUrls: ['./add-complains.component.scss'],
  styles: [`
    ngb-progressbar {
        margin-top: 5rem;
    }
    
    `]
})
export class AddComplainsComponent implements OnInit {


  
formdata=new FormGroup({ 
  cname:new FormControl(''),
  cmail:new FormControl('') ,
  cmsg:new FormControl('') ,
});
  constructor(private CrudService:CrudService) { }

  ngOnInit() {
    var rellaxHeader = new Rellax('.rellax-header');
  }
  submitcomplain(data){
    this.CrudService. passData(data);
  }

}
