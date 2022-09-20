import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { BlogdetailsComponent } from './blogdetails/blogdetails.component';
import { DiscriptionComponent } from './discription/discription.component';
import { FeedComponent } from './feed/feed.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserDataComponent } from './user-data/user-data.component';
import { UserGuard } from './user.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'  },
  { path: 'login', component: LoginComponent},
  { path: 'discription', component: DiscriptionComponent , canActivate: [UserGuard] },
  { path: 'register', component: RegistrationComponent  },
  { path: 'userData/:id', component: UserDataComponent , canActivate: [UserGuard]},
  { path: 'blog/:id', component: BlogComponent , canActivate: [UserGuard]},
  { path: 'feed', component: FeedComponent , canActivate: [UserGuard]},
  { path: 'blogdetails/:id', component: BlogdetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
