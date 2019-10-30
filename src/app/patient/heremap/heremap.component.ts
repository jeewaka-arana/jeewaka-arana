import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { HereService } from "app/core/here.service";

declare var H: any;

@Component({
  selector: 'app-heremap',
  templateUrl: './heremap.component.html',
  styleUrls: ['./heremap.component.scss']
})
export class HeremapComponent implements OnInit {

  @ViewChild("map")
    public mapElement: ElementRef;

    @Input()
    public appId: any;

    @Input()
    public appCode: any;

    @Input()
    public lat: any;

    @Input()
    public lng: any;

    @Input()
    public width: any;

    @Input()
    public height: any;

    private platform: any;
    private map: any;

    public constructor() { }

 
    public ngOnInit(){
      this.platform = new H.service.Platform({
        "app_id": this.appId,
        "app_code": this.appCode
    });
    // throw new Error("Method not implemented.");
  }

  public ngAfterViewInit() {
    let defaultLayers = this.platform.createDefaultLayers();
    this.map = new H.Map(
        this.mapElement.nativeElement,
        defaultLayers.normal.map,
        {
            zoom: 10,
            center: { lat: this.lat, lng: this.lng }
        }
    );
}
  

//   public query: string;
//     public position: string;
//     public locations: Array<any>;

//     public constructor(private here: HereService) {
//         this.query = "Tracy, CA";
//         this.position = "37.7397,-121.4252";
//     }

//     public getAddress() {
//       if(this.query != "") {
//           this.here.getAddress(this.query).then(result => {
//               this.locations = <Array<any>>result;
//           }, error => {
//               console.error(error);
//           });
//       }
//   }

//   public getAddressFromLatLng() {
//     if(this.position != "") {
//         this.here.getAddressFromLatLng(this.position).then(result => {
//             this.locations = <Array<any>>result;
//         }, error => {
//             console.error(error);
//         });
//     }
// }

}
