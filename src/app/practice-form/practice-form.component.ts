import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-practice-form',
  templateUrl: './practice-form.component.html',
  styleUrls: ['./practice-form.component.css']
})
export class PracticeFormComponent implements OnInit {

  // loginForm: FormGroup:any;

  // error_messages = {
  //   'fname': [
  //     { type: 'required', message: 'First Name is required.' },
  //   ],

  //   'lname': [
  //     { type: 'required', message: 'Last Name is required.' }
  //   ],

  //   'email': [
  //     { type: 'required', message: 'Email is required.' },
  //     { type: 'minlength', message: 'Email length.' },
  //     { type: 'maxlength', message: 'Email length.' },
  //     { type: 'required', message: 'please enter a valid email address.' }
  //   ],

  //   'password': [
  //     { type: 'required', message: 'password is required.' },
  //     { type: 'minlength', message: 'password length.' },
  //     { type: 'maxlength', message: 'password length.' }
  //   ],
  //   'confirmpassword': [
  //     { type: 'required', message: 'password is required.' },
  //     { type: 'minlength', message: 'password length.' },
  //     { type: 'maxlength', message: 'password length.' }
  //   ],
  // }

  constructor(public formBuilder: FormBuilder) {

    // this.loginForm = this.formBuilder.group({
    //   fname: new FormControl('', Validators.compose([
    //     Validators.required
    //   ])),
    //   lname: new FormControl('', Validators.compose([
    //     Validators.required
    //   ])),
    //   email: new FormControl('', Validators.compose([
    //     Validators.required,
    //     Validators.minLength(6),
    //     Validators.maxLength(30)
    //   ])),
    //   password: new FormControl('', Validators.compose([
    //     Validators.required,
    //     Validators.minLength(6),
    //     Validators.maxLength(30)
    //   ])),
    //   confirmpassword: new FormControl('', Validators.compose([
    //     Validators.required,
    //     Validators.minLength(6),
    //     Validators.maxLength(30)
    //   ])),
    // }, { 
    //   validators: this.password.bind(this)
    // });
   }

  ngOnInit(): void {
  }

  // password(formGroup: FormGroup) {
  //   const { value: password } = formGroup.get('password');
  //   const { value: confirmPassword } = formGroup.get('confirmpassword');
  //   return password === confirmPassword ? null : { passwordNotMatch: true };
  // }

}
