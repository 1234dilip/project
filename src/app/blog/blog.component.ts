import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CkeditorService } from '../userData.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
accessValue:any;
  activeTab:boolean=false
  blogForm: any;
  selectedStatus: any;
  referenceUsers: any = [];
  blogData: any = [];
  id: any;
  selectedValue2: any = null;
  show: boolean = true;
  displayStyle = 'none';
  displayStyle2 = 'none';
  userName: any = [];
  updateBlogform: any;
  title: any;
  description: any = '';
  status: any = '';
  accessedUsers: any = '';
  ngForm: any;
  blogValue: any;
  datablog = {
    _id: '',
    Author_id: '',
    description: '',
    access: '',
    accessedUsers: [],
    DateCreated: Date.now(),
    title: '',
    status: '',
  };
  errorMessage!: string;
  constructor(
    private userService: CkeditorService,
    private router: Router,
    private blogService: BlogService
  ) {}

  ngOnInit(): void {
    this.blogForm = new FormGroup({
      title: new FormControl(''),
      description: new FormControl(''),
      access: new FormControl(''),
      accessedUsers: new FormControl(''),
      status: new FormControl(''),

      
    });
   
   


    this.id = this.userService.getUserId();
    this.blogService.getBlogData(this.id).subscribe(
      (response: any) => {
        console.log('blog response', response);
        this.blogData = response;
        console.log('data inside of blog data', this.blogData);
      },
      () => {
        this.errorMessage = 'Sorry, Could not getBlogData  !';
      }
    );
    this.onBlogDatausing();
  }
  addBlog() {
    console.log('data iiside', this.blogForm.value);
    // this.blogForm.value.referenceUsers = this.blogForm.value.referenceUsers.split(',');

    this.blogService.blogData(this.id, this.blogForm.value).subscribe(
      (response: any) => {
        console.log('data inside of rseponse', response);
        // this.router.navigate(['/userrData', id]);
      },
      () => {
        this.errorMessage = 'Sorry, Could not add BlogData  !';
      }
    );
  }

  myblogData(id: any) {}

  openPopup() {
    this.displayStyle = 'block';
  }
  closePopup() {
    this.displayStyle = 'none';
  }

  onBlogDatausing() {
    this.userService.accessedUserData().subscribe(
      (response: any) => {
        console.log('data inside the response', response);
        this.userName = response;
      },
      () => {
        this.errorMessage = 'Sorry, Could not fetch data !';
      }
    );
  }

  blogDelete(blogId: any) {
    this.blogService.blogDataDelete(blogId).subscribe(
      (response) => {
        console.log('delete data of response', response);
      },
      () => {
        this.errorMessage = 'Sorry, Could not delete Blog !';
      }
    );
  }
  blogUpdata() {}

  updateBlog() {}

  openPopup2() {
    this.displayStyle2 = 'block';
  }
  closePopup2() {
    this.displayStyle2 = 'none';
  }
  getUpdateBlogData(_id: any) {
    this.blogService.blogDatagetById(_id).subscribe(
      (response: any) => {
        this.blogValue = response;
        this.datablog._id = response._id;
        this.datablog.Author_id = response.Author_id;
        this.datablog.access = response.access;
        this.datablog.accessedUsers = response.accessedUsers;
        this.datablog.description = response.description;
        this.datablog.status = response.status;
        this.datablog.title = response.title;
        this.datablog.DateCreated = response.DateCreated;

       
      },
      () => {
        this.errorMessage = 'Sorry, Could not patchData  !';
      }
    );
  }

  onUpdate() {
    this.blogService.updateblogData(this.datablog._id, this.datablog).subscribe(
      (response: any) => {
        console.log('data of updata inside of', response);
      
      },
      () => {
        this.errorMessage = 'Sorry, Could not updateblogData  !';
      }
    );
  }

  onSubmitdata(blog:any){
    const dataofid =  blog._id
    console.log('dataatayshdhfb', blog)
   this.router.navigate(['/blogdetails', dataofid]);
  }
}
