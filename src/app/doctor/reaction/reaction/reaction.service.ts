import { Injectable } from '@angular/core';
import {AngularFireDatabase,AngularFireObject} from '@angular/fire/database';
import {AngularFireAuth} from '@angular/fire/auth';
import * as _ from "lodash";

import { Observable } from 'rxjs/observable';


@Injectable({
  providedIn: 'root'
})
export class ReactionService {

userId:string;
emojiList = ['a']



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

  countReactions(reactions) {
    return _.mapValues(_.groupBy(reactions), 'length')
  }
  userReaction(reactions) {
    return _.get(reactions, this.userId)
  }
}
