import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {
  data=new BehaviorSubject<string>('hii');
  subjectData = new Subject<string>();
  replayData = new ReplaySubject(4);
  constructor() { }
  add(item:any)
  {
    this.data.next(item);
  }
  addSubject(item:any){
    this.subjectData.next(item);
  }
  addReplay(item:any){
    this.replayData.next(item);
  }
  addReplaySubject(item:any)
  {
    this.replayData.next(item);
    
  }

}
