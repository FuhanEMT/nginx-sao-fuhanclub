import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index/index.component';
import { AntvX6Component } from './antv-x6/antv-x6.component'; 

const routes: Routes = [{
  path: '',
  component: LoginComponent
},{
  path: 'main',
  component: IndexComponent,
  children: [{
    path: 'antvX6',
    component: AntvX6Component
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
