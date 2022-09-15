import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { DiscriptionComponent } from './discription/discription.component';
import { FeedComponent } from './feed/feed.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserDataComponent } from './user-data/user-data.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'discription', component: DiscriptionComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'userData/:id', component: UserDataComponent },
  { path: 'blog/:id', component: BlogComponent },
  { path: 'feed', component: FeedComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
