import { Component } from '@angular/core';
import { NetworkService } from '../network.service';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.scss']
})
export class ThreeComponent {
  constructor(private nt: NetworkService){}
  ngOnInit(){
    this.nt.replayData.subscribe((res:any)=>{
       this.replayData = res;
      console.log(res)
    })
    this.nt.data.subscribe((res:any)=>{
      this.data = res;
    })
    this.nt.subjectData.subscribe((res:any)=>{
      this.subjectData =res;
    })
  }
  data:string='';
  replayData:string ='';
  subjectData:string='';
  addReplay(item:any){
    this.nt.addReplay(item);
  }
  addReplaySubject(item:any)
  {
    this.nt.replayData.next(item);
  }
}
