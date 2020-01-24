import { API_URL } from './../../app.constants';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private http: HttpClient
    ) { }

  retrieveAllTodos(username){

    return this.http.get<Todo[]>(`${API_URL}/users/${username}/todos`);
  }

  deleteTodo(username, id){
    return this.http.delete(`${API_URL}/users/${username}/todos/${id}`);
  }

  retrieveTodo(username, id){
    return this.http.get<Todo>(`${API_URL}/users/${username}/todos/${id}`);
  }

  updateTodo(username, id, todo){
    return this.http.put(`${API_URL}/users/${username}/todos/${id}`,
                         todo);
  }

  createTodo(username, todo){
    return this.http.post(`http://localhost:8080/users/${username}/todos`,
                         todo);
  }
}
