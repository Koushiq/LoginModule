import { Component, OnInit,Output } from '@angular/core';
import { LoginService } from 'src/app/services/LoginService/login.service'; 
import { Defaults } from 'src/default';
import { FormBuilder } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() cookieStatus : any ;
  @Output() loginForm = this.formBuilder.group({
    username: '',
    password: ''
  });
  constructor(private loginService : LoginService,
    private cookieService: CookieService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }
  private getAuthResponse(loginForm)
  {
     return this.loginService.getAuthResponse(Defaults.cookieName,this.loginForm);
  }

  onSubmit(): void {
    let response = this.getAuthResponse(this.loginForm);
    
  }

}
