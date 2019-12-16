import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginserviceService } from '../services/loginservice.service';
import { NotiserviceService } from '../services/notiservice.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loader: any;
  username: string = "";
  password: string = "";
  dataLogin:any;
  classShowLogo: boolean = true;
  
  constructor(public router: Router,public loginservice: LoginserviceService) { }

  doLogin(username, password) {
    
    this.router.navigate(['/home'])
    //console.log(username,password)
    //return this.loginservice.checkLogin(username, password).subscribe((res) => {
      //console.log("res")
      
     

    //});

  }
}
