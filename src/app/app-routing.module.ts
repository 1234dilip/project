import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiscriptionComponent } from './discription/discription.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserDataComponent } from './user-data/user-data.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'discription',component:DiscriptionComponent},
  {path:'register',component:RegistrationComponent},
  {path:'userrData',component:UserDataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
