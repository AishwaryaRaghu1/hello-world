import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable({
  providedIn: 'root'
})

export class LoginServiceService {

  private UserDetails: any[];

  constructor(private _http: Http) { }

}
