import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';
import{Observable} from 'rxjs/Rx';
import{AngularFireAuth} from  '@angular/fire/auth';
import{GalleryImageModule} from '../core/models/gallery-image/gallery-image.module';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
private uid:string;
constructor(private afAuth:AngularFireAuth,private db:AngularFireDatabase){
  this.afAuth.authState.subscribe(auth =>{
    if(auth !== undefined && auth!==null) {
      this.uid = auth.uid;
    }
  })


//   getImages():Observable<GalleryImageModule[]>{

//     return  this.db.list('files'); 
    

//   }
// }
}

}
