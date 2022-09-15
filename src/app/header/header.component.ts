import { Component, OnInit } from '@angular/core';
import { CkeditorService } from '../userData.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  id: any;

  constructor(private user: CkeditorService) { }

  ngOnInit(): void {
    this.id = this.user.getUserId()
    console.log('localstorage id', this.user.getUserId())
  }

  logOut() {
    localStorage.removeItem('id'),
      localStorage.removeItem('token')
  }

}
