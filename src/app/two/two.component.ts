import { Component } from '@angular/core';
import { NetworkService } from '../network.service';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.scss']
})
export class TwoComponent {
  constructor(private nt:NetworkService)
  {

  }
  data:string='';
  subjectData:string='';
  replayData:string='';
  ngOnInit(){
    this.nt.data.subscribe((res:any)=>{
      this.data = res;
    })
    this.nt.subjectData.subscribe((res:any)=>{
      this.subjectData = res;
    })
    this.nt.replayData.subscribe((res:any)=>{
      this.replayData = res;
    })
  }
  addSubject(item:any){
    this.nt.addSubject(item)
  }
}
