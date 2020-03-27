import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WarningComponent } from './warning/warning.component';
import { SuccessComponent } from './success/success.component';
import { ServerComponent } from './server/server.component';
import { Assignment2Component } from './assignment2/assignment2.component';
import { Assignment3Component } from './assignment3/assignment3.component';

const routes: Routes = [
  {path:'',redirectTo:'/server',pathMatch:'full'},
  { path: 'server', component: ServerComponent },
  { path: 'warning', component: WarningComponent },
  { path: 'success', component: SuccessComponent },
  { path: 'assignment-2', component: Assignment2Component },
  { path: 'assignment3', component: Assignment3Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
