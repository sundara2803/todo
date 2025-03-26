// Updated Angular To-Do App with Improved UI and Theme Handling

import { Component } from '@angular/core';
import { ThemeService } from '../theme.service';
import { TodoService, Task } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  newTask = '';
  tasks: Task[] = [];
  themes = ['light', 'dark', 'blue', 'green', 'purple', 'red'];
  editingIndex: number | null = null;
  editedText: string = '';

  constructor(private todoService: TodoService, public themeService: ThemeService) {
    this.tasks = this.todoService.getTasks();
  }

  onThemeChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const selectedTheme = selectElement.value;
    this.setTheme(selectedTheme);
  }

  setTheme(theme: string) {
    this.themeService.setTheme(theme);
  }

  addTask() {
    if (this.newTask.trim()) {
      this.todoService.addTask(this.newTask);
      this.newTask = '';
    }
  }

  startEditing(index: number) {
    this.editingIndex = index;
    this.editedText = this.tasks[index].text;
  }

  saveTask(index: number) {
    if (this.editedText.trim()) {
      this.todoService.editTask(index, this.editedText);
    }
    this.cancelEditing();
  }

  cancelEditing() {
    this.editingIndex = null;
    this.editedText = '';
  }

  removeTask(index: number) {
    this.todoService.removeTask(index);
  }

  toggleCompletion(index: number) {
    this.todoService.toggleCompletion(index);
  }
}
