import { Component, OnInit } from '@angular/core';
import{CrudService} from 'app/core/crud.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-complains',
  templateUrl: './add-complains.component.html',
  styleUrls: ['./add-complains.component.scss']
})
export class AddComplainsComponent implements OnInit {


  
formdata=new FormGroup({ 
  cname:new FormControl(''),
  cmail:new FormControl('') ,
  cmsg:new FormControl('') ,
});
  constructor(private CrudService:CrudService) { }

  ngOnInit() {
    
  }
  submitcomplain(data){
    this.CrudService. passData(data);
  }

}
