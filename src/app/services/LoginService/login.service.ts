import { Injectable,Input } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  @Input() loginForm = this.formBuilder.group({
    username: '',
    password: ''
  });
  public readonly ROOT_URL = "https://localhost:44356/api/";
  loginUrl = 'login';
  response :any;
  constructor(private cookieService:CookieService,
              private formBuilder:FormBuilder,
              private http:HttpClient) 
              {

              }
  
  private getCookie(key: string){
    return this.cookieService.get(key);
  }
  getAuthResponse(key:string,loginForm:any)
  {
    var cookie = this.getCookie(key);
    this.response=  this.validateLogin(key,loginForm);
    return this.response;
  }
  validateLogin(key:string,loginForm:FormGroup) {
    console.log('VAK',loginForm);
    // loginForm.subscribe(data=>{
    //   let result = this.http.post(this.ROOT_URL+this.loginUrl,{
    //     username:loginForm.username,
    //     password:loginForm.password
    //   });
    // })
    // let username = loginForm.get('username').value;
    // let password = loginForm.get('password').value;

    let result = this.http.post(this.ROOT_URL+this.loginUrl,{
          username:loginForm.get('username').value,
          password:loginForm.get('password').value
    });
    
  }
}
