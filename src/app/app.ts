import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Task } from "./task/task";
import { FormsModule } from '@angular/forms';
import { CurrencyPipe, DatePipe, DecimalPipe, LowerCasePipe, PercentPipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { TaskService } from './task-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Task, FormsModule, UpperCasePipe, LowerCasePipe, TitleCasePipe, DatePipe, DecimalPipe, CurrencyPipe, PercentPipe],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('todolist');
  i: number = 3;
  newTaskTitle: string = '';
  tasks: any[] = [];
constructor(private taskService: TaskService) {}
ngOnInit() {
this.tasks = this.taskService.getTasks();
}
  addNewTask() {
    if (this.newTaskTitle.trim() === '') return;
    this.i++;
    this.tasks.push({
      id: this.i,
      title: this.newTaskTitle,
      done: false
    });
    this.newTaskTitle = '';   
  }
  removeTask(id: number) {
    const index = this.tasks.findIndex(t => t.id === id);
    if (index !== -1) this.tasks.splice(index, 1);
  }
  today = new Date();
  price = 1234.56;
  percentage = 0.259;
}