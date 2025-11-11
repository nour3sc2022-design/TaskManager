import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks = [
    { title: 'Learn Angular', done: false },
    { title: 'Build ToDoList App', done: false },
    { title: 'Celebrate test !', done: true }
];
getTasks() {
return this.tasks;
}
addTask(title: string) {
this.tasks.push({ title, done: false });
}
}



