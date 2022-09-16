import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public data1 :any = "Hello this is testing of service "

  constructor(private http : HttpClient) { 
    console.log("This is the constructor of service");
  }

  getData(){
    // console.log("This is the getData() method of service");

    return this.http.get("https://jsonplaceholder.typicode.com/users");
  }

  sendData(formData : any){
    return this.http.post("https://jsonplaceholder.typicode.com/posts" , formData);
  }

  sendTemplateFormData(formData : any){
    return this.http.post("https://jsonplaceholder.typicode.com/posts" , formData);
  }

  getAllData(){
    return this.http.get("https://jsonplaceholder.typicode.com/posts");
  }

  getDataMap():Observable<any>{
    return this.http.get<any>("https://jsonplaceholder.typicode.com/users");
  }

  getPromiseData(){
    return this.http.get("https://jsonplaceholder.typicode.com/posts").toPromise();
  }
}
