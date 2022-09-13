import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CkeditorService {

  constructor(private http:HttpClient) { }

  createData(paylaod:any){
  return this.http.post(`${environment.Api_url}/v1/loginUser`,paylaod).pipe(map((user:any) => {
    console.log("data",user)
     localStorage.setItem('token',user.token);

   
    return user;
}));
  
  } 
  registerData(paylaod:any){
  console.log('data of register3333',paylaod)
  return this.http.post(`${environment.Api_url}/v1/registerUser`,paylaod)

  }
  
  getAuthToken() {
 return localStorage.getItem('token')
 }

 getloginData(){
  console.log('backend data')
 return this.http.get(`${environment.Api_url}/v1/getloginData`)
 }

 getDataFromid(_id:any){
  return this.http.get(`${environment.Api_url}/v1/getuserofDataByid/${_id}`)
 
 }
 getUserId(){  
  
}  

}
