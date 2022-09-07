import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiscriptionComponent } from './discription/discription.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'discription',component:DiscriptionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
