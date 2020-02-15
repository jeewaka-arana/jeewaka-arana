import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';

declare var H: any;

@Component({
  selector: 'app-here-map',
  templateUrl: './here-map.component.html',
  styleUrls: ['./here-map.component.scss']
})
export class HereMapComponent implements OnInit {

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

  constructor() { }

  public ngOnInit() {
    this.platform = new H.service.Platform({
        "app_id": this.appId,
        "app_code": this.appCode
    });
    // this.search = new H.places.Search(this.platform.getPlacesService());
    // throw new Error("Method not implemented.");
    // this.dropMarker({ "lat": "6.646072", "lng":"80.076523" },"horana");
    this.dropMarker();
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

// public places(query: string) {
// //  query = "Tracy, CA";
// this.map.removeObjects(this.map.getObjects());
// this.search.request({ "q": query, "at": this.lat + "," + this.lng }, {}, data => {
//   for(let i = 0; i < data.results.items.length; i++) {
//       this.dropMarker({ "lat": data.results.items[i].position[0], "lng": data.results.items[i].position[1] }, data.results.items[i]);
//   }
// }, error => {
//   console.error(error);
// });
// }

private dropMarker() {
let marker = new H.map.Marker({ "lat": "6.6447002621030515", "lng":"80.07340432967197" });
marker.setData("<p>" + "horana" + "</p>");
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