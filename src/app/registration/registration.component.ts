import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { BlogService } from '../blog.service';
import { CkeditorService } from '../userData.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent);
    const invalidParent = !!(
      control &&
      control.parent &&
      control.parent.invalid &&
      control.parent.dirty
    );

    return invalidCtrl || invalidParent;
  }
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  [x: string]: any;
  myForm: any;
  uploads: any = [];
  isSignedIn!: boolean;

  matcher = new MyErrorStateMatcher();
  constructor(
    private userService: CkeditorService,
    private fb: FormBuilder,
    private router: Router,
    private blogService: BlogService
  ) {}

  ngOnInit(): void {
    this.myForm = this.fb.group(
      {
        name: [''],
        password: ['', [Validators.required]],
        confirmpassword: [''],

        profile: new FormControl(''),
      },
      { validator: this.checkPasswords }
    );
  }

  profileImageSelect(event: any) {
    const file = event.target.files[0];
    this.myForm.patchValue({
      profile: file,
    });
  }

  userRegistration() {
    const userData = new FormData();
    userData.append('name', this.myForm.get('name').value);
    userData.append('password', this.myForm.get('password').value);
    userData.append(
      'confirmpassword',
      this.myForm.get('confirmpassword').value
    );
    userData.append('profile', this.myForm.get('profile').value);
    this.userService.registerData(userData).subscribe((response: any) => {
      this.isSignedIn = true;
    });
    this.uploads = this.myForm;
  }

  checkPasswords(group: FormGroup) {
    let pass = group.controls['password'].value;
    let confirmPass = group.controls['confirmpassword'].value;
    return pass === confirmPass ? null : { notSame: true };
  }

}
