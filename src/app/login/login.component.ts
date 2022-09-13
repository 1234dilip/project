import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CkeditorService } from '../ckeditor.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: any
  constructor(private userService: CkeditorService, private router: Router) { }

  ngOnInit(): void {
    this.login = new FormGroup({
      name: new FormControl(''),
      password: new FormControl(''),
      lastLogin: new FormControl(''),
      profile: new FormControl('')
    })
  }


  userLogin() {

    this.userService.createData(this.login.value).subscribe((response) => {
      console.log("datata of response", response)
      this.router.navigate(['/userrData', response._id]);


    })


  }



}
