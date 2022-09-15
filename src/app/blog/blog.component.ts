import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CkeditorService } from '../userData.service';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  blogForm:any
  selectedStatus:any;
  referenceUsers:any =[];
  blogData:any = [];
  id:any;
  selectedValue2: any = null;
  show:boolean = true;
  displayStyle = "none";
  userName:any = []
  constructor(private userService: CkeditorService, private router: Router,private blogService:BlogService) { 
   
  }

  ngOnInit(): void {
    
    this.blogForm = new FormGroup({
      tittle:new FormControl(''),
      description:new FormControl(''),
      access:new FormControl(''),
      accessedUsers:new FormControl(''),
      status:new FormControl(''),
     
    })
this.id =  this.userService.getUserId()
  this.blogService.getBlogData(this.id).subscribe((response) => {
    console.log('blog response',response)
this.blogData = response
console.log('data inside of blog data',this.blogData)
   
  })
  this. onBlogDatausing()

  }
  addBlog(){
    // this.blogForm.value.referenceUsers = this.blogForm.value.referenceUsers.split(',');

this.blogService.blogData(this.id,this.blogForm.value,).subscribe((response:any) => {
  console.log('data inside of rseponse',response)
  // this.router.navigate(['/userrData', id]);



})
  }

  myblogData(id:any){
   
  }

  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }

  onBlogDatausing(){
    this.userService.accessedUserData().subscribe((response) => {
console.log('data inside the response',response)
this.userName = response
    })
  }

}
