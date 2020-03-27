import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css']
})
export class Assignment2Component implements OnInit {

username:string='';
;
empty=false;

see(){
  if(this.username!=''){
    this.empty=true;
    return true;
  }
  else{
    this.empty=false;
    return false;
  };


}
makeempty(){

  this.username='';
  
}
  constructor() {

    
   }

  ngOnInit() {

    
  }

}
