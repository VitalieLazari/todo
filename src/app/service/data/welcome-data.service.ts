import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core';

export class HelloWorldBean{
  constructor(public message:string){}
}
@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http: HttpClient 
  ) { }

  public executeHelloWordBeanService(){
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean');
  }

  public executeHelloWordBeanServiceWithPathVariable(name){
    let basicAuthHeaderString = this.createBasicAuthenticationHeader();
    
    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })
     
    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`, {headers});
  }

  createBasicAuthenticationHeader() {
    let username = 'in28minutes'
    let password = 'dummy'
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password)
    return basicAuthHeaderString;
  }
}
