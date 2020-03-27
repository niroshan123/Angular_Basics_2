import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  allowSuccess=false;
  indexNo:string='174139F';
  serverStatus:string='offline';
  age:number=10;
  message:string = '';
  successName:string='';
  update2:string='';

  getServerStatus(){
    return 'online';
  }

  save(){
     this.message="successfully saved";
     return this.message;

    
  }
  // textbox eka gahana eka ehemm output kirimata
  onSuccessUpdate(event:Event){

    this.successName=(<HTMLInputElement>event.target).value;
    

  }

  constructor() { 
    setTimeout(()=>{
      this.allowSuccess=true;
    },2000)
  }

  ngOnInit() {
  }

}

