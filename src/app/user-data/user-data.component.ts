import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../blog.service';
import { CkeditorService } from '../userData.service';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css'],
})
export class UserDataComponent implements OnInit {
  userData: any;

  constructor(
    private userService: CkeditorService,
    private route: ActivatedRoute,
    private blogService: BlogService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.getDataFromId(id);
  }

  getDataFromId(id: any) {
    this.userService.getDataFromid(id).subscribe((response) => {
      this.userData = response;
    });
  }
}
