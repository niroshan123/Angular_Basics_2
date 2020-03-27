import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  routes=[
    {linkName:'Warning',url: 'warning'},
    {linkName:'Success',url: 'success'},
    {linkName:'Assignment-2',url: 'assignment-2'},
    {linkName:'Assignment3',url: 'assignment3'},
      ];
    

}
