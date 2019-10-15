import { Injectable } from '@angular/core';


import * as firebase from 'firebase/app';
firebase.initializeApp(environment.firebaseConfig);
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GeoService {
  
  constructor() {
    
  }

}
