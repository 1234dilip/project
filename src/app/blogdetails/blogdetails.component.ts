import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../blog.service';
import { CkeditorService } from '../userData.service';

@Component({
  selector: 'app-blogdetails',
  templateUrl: './blogdetails.component.html',
  styleUrls: ['./blogdetails.component.css']
})
export class BlogdetailsComponent implements OnInit {
  blogData:any=[]
  constructor( private userService: CkeditorService,
    private route: ActivatedRoute,
    private blogService: BlogService) { }

  ngOnInit(): void {

    const id = this.route.snapshot.params['id'];
    console.log('id of blog snapsort',this.route.snapshot.params)
   
  this.BlogDetail(id)
  }
  BlogDetail(id:any){
  this.blogService.blogDatagetById(id).subscribe((response) => {
    
    this.blogData=response
    console.log("data in side of the response", this.blogData)
  })
}




}
