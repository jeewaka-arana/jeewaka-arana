import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { v4 } from 'uuid';
import { forkJoin } from 'rxjs';
import { mergeMap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { async } from 'q';
import { AngularFirestore } from '@angular/fire/firestore';
@Component({
  selector: 'app-t',
  templateUrl: './t.component.html',
  styleUrls: ['./t.component.scss']
})
export class TComponent implements OnInit {

  
  constructor(private storage: AngularFireStorage , private db: AngularFirestore) { }
  
  private name;
  private size;
  private last;
  private type; 
  private state; 
  private fileRef;
  private downloadURL;
  private AA;
  ngOnInit(){}


  uploadFile(file: File, fileName?: string) { 
    const filePath = `uploads/${fileName}.${file.name.split('.').pop()}`;
    const cacheControl = 'max-age=3600;'; 
    this.fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file, { cacheControl }); 
    return forkJoin(task.snapshotChanges()).pipe(
      mergeMap(() => this.fileRef.getDownloadURL()),
      map((url) => (url as string)),
    );
  }

  upload(files : FileList){
    let file  = files.item(0);
    this.name = file.name; 
    this.type = file.type; 

    this.uploadFile(file,this.name).subscribe(
      (e)=>{ console.log("Uploading ");
      },
      (error)=>{
        console.log(" Error ", error);
      },
      ()=>{ 
        const promise =   this.fileRef.getDownloadURL().toPromise(); 
        promise.then( (result)=>{
          console.log(result); 
          this.db.collection('Images').add({Filename:this.name , path: result})
        }); 
        this.state =  true; 
      } 
    );
  }


  
 



}
