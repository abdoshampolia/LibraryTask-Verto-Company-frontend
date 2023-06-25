import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  registrationForm: FormGroup;

  constructor( private accountService: AccountService) {
    this.registrationForm = new FormGroup({});
  }
  ngOnInit(): void {
    this.registrationForm.addControl('username', new FormControl("", [Validators.required])),
    this.registrationForm.addControl('password', new FormControl("", [Validators.required]))
    this.registrationForm.addControl('email', new FormControl("", [Validators.maxLength(100),Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}"), Validators.required])),
    this.registrationForm.addControl('phoneNumber', new FormControl("", [Validators.maxLength(20),Validators.pattern("[0-9 ]{11}"), Validators.required]))
    }

  onSubmit() {
    const user = this.registrationForm.value;

    this.accountService.register(user).subscribe(response => {
      console.log(response);
    });
  }
}
