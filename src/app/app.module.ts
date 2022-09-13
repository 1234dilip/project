import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CkeditorComponent } from './ckeditor/ckeditor.component';

import { CKEditorModule } from 'ng2-ckeditor';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';

import {  HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DiscriptionComponent } from './discription/discription.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { RegistrationComponent } from './registration/registration.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { CkeditorService } from './ckeditor.service';
import { InterceptorService } from './interceptor.service';
// import { MatFileUploadModule } from 'mat-file-upload/lib/mat-file-upload.module';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { UserDataComponent } from './user-data/user-data.component';
import { ProductComponent } from './product/product.component';


@NgModule({
  declarations: [
    AppComponent,
    CkeditorComponent,
    LoginComponent,
    DiscriptionComponent,
    HeaderComponent,
    RegistrationComponent,
    UserDataComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CKEditorModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule
    
    
    
    
   
  ],
  providers: [
    CkeditorService , 
    {
     provide: HTTP_INTERCEPTORS,
     useClass: InterceptorService,
     multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
