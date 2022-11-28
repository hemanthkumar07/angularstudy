import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  api_url="http://localhost:3000/post/"

  constructor( private http:HttpClient) { }
  getEmployee(){
    return this.http.get(this.api_url)
  }
  postEmployee(data1:any){
    return this.http.post(this.api_url,data1)
  }
  deleteEmployee(id:any){
    return this.http.delete(this.api_url+id)
  }
  editEmployee(data2:any,id:any){
    return this.http.put(this.api_url+id,data2)
  }
}
