import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICaterers } from '../catererlist';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CaterersListService {

  private _url: string = "../assets/data/caterers_list.json";  

  constructor(private http: HttpClient) { }

  getCaterersData(): Observable<ICaterers[]>{
    // get request url as its argument, which will point to the web server
    return this.http.get<ICaterers[]>(this._url);
  }
}
