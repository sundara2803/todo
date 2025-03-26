import { Injectable } from '@angular/core';

export interface Task {
  text: string;
  completed: boolean;
}

@Injectable({ providedIn: 'root' })
export class TodoService {
  private tasks: Task[] = JSON.parse(localStorage.getItem('tasks') || '[]');

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(text: string): void {
    this.tasks.push({ text, completed: false });
    this.saveTasks();
  }

  editTask(index: number, newText: string): void {
    this.tasks[index].text = newText;
    this.saveTasks();
  }

  removeTask(index: number): void {
    this.tasks.splice(index, 1);
    this.saveTasks();
  }

  toggleCompletion(index: number): void {
    this.tasks[index].completed = !this.tasks[index].completed;
    this.saveTasks();
  }

  private saveTasks(): void {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}