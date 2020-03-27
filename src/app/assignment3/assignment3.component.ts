import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css']
})
export class Assignment3Component implements OnInit {

showSecret=false;
showSecret1=false;
log=[];

onToggleDetails(){

this.showSecret1=!this.showSecret1;
this.log.push(this.log.length+1);

}
  constructor() { }

  ngOnInit() {
  }

}
