import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  constructor(private http: HttpClient) {}

  blogData(_id: any, data: any) {
    return this.http.post(
      `${environment.Api_url}/v1/blog/addblog/${_id}`,
      data
    )
  }

  getBlogData(_id: any) {
    return this.http.get(`${environment.Api_url}/v1/blog/getData/${_id}`)
  }

  feetpublicData() {
    return this.http.get(`${environment.Api_url}/v1/feet/data`);
  }
  blogDataDelete(_id:any){
    return this.http.delete(`${environment.Api_url}/v1/blog/delete/${_id}`)
  }

  updateBlog(_id:any,data:any){
    return this.http.put(`${environment.Api_url}/v1/blog/updata/${_id}`,data)
  }

  blogDatagetById(_id:any){
    return this.http.get(`${environment.Api_url}/v1/blog/getdatabyId/${_id}`)
  }

  updateblogData(_id:any,data:any){
    return this.http.put(`${environment.Api_url}/v1/blog/updata/${_id}`,data)
  }



}
