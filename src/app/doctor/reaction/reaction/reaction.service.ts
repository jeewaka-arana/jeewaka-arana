import { Injectable } from '@angular/core';
import {AngularFireDatabase,AngularFireObject} from '@angular/fire/database';
import {AngularFireAuth} from '@angular/fire/auth';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ReactionService {

userId:string;
emojiList = ['like','dislike','heart','angry']


  constructor(private db:AngularFireDatabase,private afAuth:AngularFireAuth) { 

this.afAuth.authState.subscribe((auth) =>{
  if (auth) this.userId = auth.uid
});

  }
  getReactions(itemId): AngularFireObject<any>{
    return this.db.object(`reactions/${itemId}`)
  
  }
  updateReaction(itemId, reaction=0)
  {
const data ={[this.userId] : reaction}
this.db.object(`reactions/${itemId}`).update(data)
  }

  removeReaction(itemId){

    this.db.object(`reactions/${itemId}/${this.userId}`).remove()
  }

  ///utilities for sorting reactions

  countReactions(reactions){

    return _.mapValues (_.groupBy(reactions),'length')
  }

}
