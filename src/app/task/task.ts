import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.html',
  styleUrls: ['./task.css']
})
export class Task {
  @Input() taskTitle = '';
  @Input() isDone = false;
  @Output() remove = new EventEmitter<void>();
  markAsDone() {
    this.isDone = !this.isDone;
  }
  deleteTask() {
    this.remove.emit();
  }
  checked = false;
  Checked(event: Event) {
    this.isDone = (event.target as HTMLInputElement).checked;
}

}
