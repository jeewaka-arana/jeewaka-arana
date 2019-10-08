import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mynav',
  templateUrl: './mynav.component.html',
  styleUrls: ['./mynav.component.scss']
})
export class MynavComponent implements OnInit {

  constructor() { }

  ngOnInit() {


    // $(document).ready(function(){
    //   $(window).scroll(function() { 
    //     if ($(document).scrollTop() > 50) { 
    //       // change the color from white to red to show the effect
    //       $(".navbar.fixed-top").css("background-color", "red");
    //     } else {
    //       $(".navbar.fixed-top").css("background-color", "transparent"); 
    //     }
    //   });
    // });

  }

}
