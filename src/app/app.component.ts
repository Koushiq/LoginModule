import { Component,Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LoginService } from './services/LoginService/login.service'
import {Defaults} from '../default';
import {Login} from './services/LoginService/login'
import { Observable, Subscriber } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [ CookieService ],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blogging-app-frontend';
  constructor(private loginService:LoginService)
  {
    
  }
}
