import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { TASKS } from 'src/app/mock-tasks';
import { Task } from 'src/app/types';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private api = 'http://localhost:5000/tasks';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.api);
  }

  deleteTask(task: Task): Observable<Task> {
    return this.http.delete<Task>(`${this.api}/${task.id}`);
  }

  updateTaskReminder(task: Task): Observable<Task> {
    return this.http.put<Task>(`${this.api}/${task.id}`, task, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    });
  }
}
