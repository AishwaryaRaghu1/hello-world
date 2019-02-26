import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import {BrowserModule} from '@angular/platform-browser';
// const httpOptions={
//    headers:new HttpHeaders({'Access-Control-Allow-Origin':'http://35.200.240.39/user/api/registration/',
//                             'Access-Control-Allow-Headers':'Origin, Content-Type, X-Auth-Token',
//                            'Access-Control-Allow-Methods':'POST',
//                             'Content-Type':'application/json'})
// }
const url: string = 'http://35.200.240.39/user/api/registration/';
@Injectable({
  providedIn: 'root'
})

export class RegistrationServiceService {

 
 
  constructor(private http:HttpClient) { }

  registerUser(user)
  {
         
    let params=new HttpParams()
    params=params.set('last_name','a');
    params=params.set('username','a@annadaat.com');
    params=params.set('first_name','A'); 
    params=params.set('email','a@annadaat.com'); 
    params=params.set('password','annadaat');

   
    return this.http.post(url,params)
    .subscribe(
      (Response)=>{
        console.log(Response);
      },
      err => console.log(err)
    );

    // return this.http.post(url,params) .toPromise()
    // .then((response) => response);
   

      }

}
