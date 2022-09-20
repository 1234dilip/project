import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CkeditorService {
  constructor(private http: HttpClient) {}

  userLogIn(paylaod: any) {
    return this.http.post(`${environment.Api_url}/v1/loginUser`, paylaod).pipe(
      map((user: any) => {
        localStorage.setItem('token', user.token);
        
        return user;

       
      })
    );
  }
  registerData(paylaod: any) {
    return this.http.post(`${environment.Api_url}/v1/registerUser`, paylaod )
  }

  getAuthToken() {
    return  localStorage.getItem('token');

  }


  isTokenAvailable() {
    return  !! localStorage.getItem('token');

  }

 

  getloginData() {
    return this.http.get(`${environment.Api_url}/v1/getloginData`)
  }

  getDataFromid(_id: any) {
    return this.http.get(`${environment.Api_url}/v1/getuserofDataByid/${_id}`)
  }

  getUserId() {
    return localStorage.getItem('id');
  }

  accessedUserData() {
    return this.http.get(`${environment.Api_url}/v1/get/users/`);
  }

  
  
}
