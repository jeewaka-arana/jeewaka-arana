import { Component, OnInit , ViewChild, ElementRef, Input,} from '@angular/core';
import { HereService } from "app/core/here.service";

declare var H: any;

@Component({
  selector: 'app-heremap',
  templateUrl: './heremap.component.html',
  styleUrls: ['./heremap.component.scss']
})
export class HeremapComponent implements OnInit {

 
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
  

  public query: string;
    public position: string;
    public locations: Array<any>;

    public constructor(private here: HereService) {
        this.query = "Tracy, CA";
        this.position = "37.7397,-121.4252";
    }

    public getAddress() {
      if(this.query != "") {
          this.here.getAddress(this.query).then(result => {
              this.locations = <Array<any>>result;
          }, error => {
              console.error(error);
          });
      }
  }

  public getAddressFromLatLng() {
    if(this.position != "") {
        this.here.getAddressFromLatLng(this.position).then(result => {
            this.locations = <Array<any>>result;
        }, error => {
            console.error(error);
        });
    }
}

}
