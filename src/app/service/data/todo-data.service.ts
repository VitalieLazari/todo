import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from 'src/app/list-todos/list-todos.component';
import { WelcomeDataService } from './welcome-data.service';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private http: HttpClient,
    private auth: WelcomeDataService
    ) { }

  retrieveAllTodos(username){
    let basicAuthHeaderString = this.auth.createBasicAuthenticationHeader();
    
    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })

    return this.http.get<Todo[]>(`http://localhost:8080/users/${username}/todos`, {headers});
  }

  deleteTodo(username, id){
    return this.http.delete(`http://localhost:8080/users/${username}/todos/${id}`);
  }

  retrieveTodo(username, id){
    return this.http.get<Todo>(`http://localhost:8080/users/${username}/todos/${id}`);
  }

  updateTodo(username, id, todo){
    return this.http.put(`http://localhost:8080/users/${username}/todos/${id}`,
                         todo);
  }

  createTodo(username, todo){
    return this.http.post(`http://localhost:8080/users/${username}/todos`,
                         todo);
  }
}
