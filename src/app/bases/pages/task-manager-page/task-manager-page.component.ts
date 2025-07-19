import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  templateUrl: './task-manager-page.component.html',
  styleUrl: './task-manager-page.component.css',
})
export default class TaskManagerPageComponent {

  tasks = signal(0);
  // task: number = 0;
  seconds = signal(0);

  constructor(){
     setInterval(() => {
      // this.counter += 1;
      this.seconds.update( (current) => current + 1);
    }, 1000)
  }

  completeTask(){
    this.tasks.update((currentValue) => currentValue + 1)
    // this.task =+ 1;
  }

  //* Deshacer la tarea
  undoTask(value: number = 1){
    if (this.tasks() == 0) return;
    // if (this.tasks() == 0) {
    //   return;
    // }
    // if (this.tasks() > 0) {
      this.tasks.update( (current) => current - value);
    // }
  }

  resetTask(){
    this.tasks.set(0);
  }

  getProgressPercent(): number {
    const maxTasks = 10;

      // return (this.tasks() / maxTasks) * 100
    return Math.min((this.tasks() / maxTasks) * 100, 100);
  }

 }
