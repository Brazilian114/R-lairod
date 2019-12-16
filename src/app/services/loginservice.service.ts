import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient,HttpHeaders } from '@angular/common/http';
import { GlobalvariableService } from '../services/globalvariable.service';
import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {
apiURL:string = "";

  constructor(private http: HttpClient, public webService: GlobalvariableService) { 
    this.apiURL = this.webService.apiURL;  

  }
  checkLogin(username, password){
    var data ="?oUsername="+username+"&oPassword="+password;
    return this.http.get(this.apiURL+'Check_Login'+data, httpOptions)
  }

}
