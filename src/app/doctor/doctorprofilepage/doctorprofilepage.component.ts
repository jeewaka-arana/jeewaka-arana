import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctorprofilepage',
  templateUrl: './doctorprofilepage.component.html',
  styleUrls: ['./doctorprofilepage.component.scss']
})
export class DoctorprofilepageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.document.body.style.backgroundImage='url("../../../assets/img/B.jpg")';
  }

}
