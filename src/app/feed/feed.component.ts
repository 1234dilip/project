import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { BlogService } from '../blog.service';
import { CkeditorService } from '../userData.service';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  feedData:any = []
  constructor(private userService: CkeditorService, private fb: FormBuilder, private router: Router,private blogService:BlogService) { }

  ngOnInit(): void {
this.feetresponseData()

  }
feetresponseData(){
  this.blogService.feetpublicData().subscribe((response:any) => {
   
    this.feedData = response
  })
  }


}
