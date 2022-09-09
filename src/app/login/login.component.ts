import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { CkeditorService } from '../ckeditor.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  login:any
  constructor(private ckeditor:CkeditorService) { }

  ngOnInit(): void {
    this.login = new FormGroup({
      name:new FormControl(''),
      password:new FormControl(''),
      lastLogin:new FormControl(''),
      profile:new FormControl('')
    })
  }


  onFileSelect(event:any){
    const file = event.target.files[0]
    console.log('sdhfjrfgnrjg',event.target.files)
    console.log('data of file',this.login.get('profile'))
    this.login.patchValue({
      profile: file
    });
  
  }


  onSubmit(){
    
const userData = new FormData()

userData.append('name',this.login.get('name').value);
userData.append('password',this.login.get('password').value);
userData.append('lastLogin',this.login.get('lastLogin').value);
// userData.append('profile',this.login.get('profile').value);
console.log("userData",userData)

    this.ckeditor.createData(this.login.value).subscribe((response) =>{
      console.log("datata of response",response)
      // const store =  localStorage.setItem('currentUser', JSON.stringify(response))
      // console.log('store',store)

    })
   

  }
 
  

}
