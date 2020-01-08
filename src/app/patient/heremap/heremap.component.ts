import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { HereService } from "app/core/here.service";

declare var H: any;

@Component({
  selector: 'app-heremap',
  templateUrl: './heremap.component.html',
  styleUrls: ['./heremap.component.scss']
})
export class HeremapComponent implements OnInit {

  private ui: any;
private search: any;

  @ViewChild("map",{static:false})
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

    public constructor() { 
      
    }

 
    public ngOnInit(){
      this.platform = new H.service.Platform({
        "app_id": this.appId,
        "app_code": this.appCode
    });
    this.search = new H.places.Search(this.platform.getPlacesService());
    // throw new Error("Method not implemented.");
    // this.places("Colombo")
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
    let behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(this.map));
    this.ui = H.ui.UI.createDefault(this.map, defaultLayers);
}

public places(query: string) {
  this.map.removeObjects(this.map.getObjects());
  this.search.request({ "q": query, "at": this.lat + "," + this.lng }, {}, data => {
      for(let i = 0; i < data.results.items.length; i++) {
          this.dropMarker({ "lat": data.results.items[i].position[0], "lng": data.results.items[i].position[1] }, data.results.items[i]);
      }
  }, error => {
      console.error(error);
  });
}

private dropMarker(coordinates: any, data: any) {
  let marker = new H.map.Marker(coordinates);
  marker.setData("<p>" + data.title + "<br>" + data.vicinity + "</p>");
  marker.addEventListener('tap', event => {
      let bubble =  new H.ui.InfoBubble(event.target.getPosition(), {
          content: event.target.getData()
      });
      this.ui.addBubble(bubble);
  }, false);
  this.map.addObject(marker);
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
