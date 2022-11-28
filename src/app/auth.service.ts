import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  api_url="http://localhost:3000/post"

  constructor( private http:HttpClient) { }
  getEmployee(){
    return this.http.get(this.api_url)
  }
}
