import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CkeditorService {

  constructor(private http:HttpClient) { }

  createData(paylaod:any){
return this.http.post(`${environment.Api_url}/v1/createData`,paylaod)
  }

}
