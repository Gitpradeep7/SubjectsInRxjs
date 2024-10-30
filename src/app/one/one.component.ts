import { Component } from '@angular/core';
import { NetworkService } from '../network.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss']
})
export class OneComponent {
  data:string='';
  subjectData:string='';
  constructor(private nt:NetworkService){}
  ngOnInit(){
    this.nt.data.subscribe((res:any)=>{
      this.data = res;
    })
    this.nt.subjectData.subscribe((res:any)=>{
      this.subjectData = res;
    })
  }
  add(item:any){
    this.nt.add(item);
  }
}
