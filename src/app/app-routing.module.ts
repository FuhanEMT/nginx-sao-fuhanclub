import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index/index.component';
import { AntvX6Component } from './antv-x6/antv-x6.component'; 
import { SckotioComponent } from './sckotio/sckotio.component'

const routes: Routes = [{
  path: '',
  component: IndexComponent,
  children: [{
    path: 'antvX6',
    component: AntvX6Component
  },{
    path: 'sckotio',
    component: SckotioComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
