import { Component, OnInit } from '@angular/core';
import { CkeditorService } from '../ckeditor.service';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {
  userData:any = [];
  constructor(private ckeditor:CkeditorService) { }

  ngOnInit(): void {
    // this. userLoginData()
    // this.getDataFromId()
  }
  // userLoginData(id:any){
  // this.ckeditor. getloginData().subscribe((response) => {
  //   console.log('data of response in the blog ',response)
  //   this.userData = response
  // })

  // }
  getDataFromId(id:any){
    
    this.ckeditor.getDataFromid(id).subscribe((response) => {
      console.log('data of many data ',response)
      // this.userData = response
 
    })
  }

}
