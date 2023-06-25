import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private accountService: AccountService) {
    this.loginForm = new FormGroup({});
  }
  ngOnInit(): void {
    this.loginForm.addControl('username', new FormControl("", [Validators.required])),
    this.loginForm.addControl('password', new FormControl("", [Validators.required]))
    }

  onSubmit() {
    const user = this.loginForm.value;
    this.accountService.login(user).subscribe(response => {
      console.log(response);
    });
  }
}
