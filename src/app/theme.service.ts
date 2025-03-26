import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private themes = ['light', 'dark', 'blue', 'green', 'purple', 'red'];
  private currentTheme = 'light';

  constructor() {
    this.loadTheme();
  }

  setTheme(theme: string): void {
    if (this.themes.includes(theme)) {
      this.currentTheme = theme;
      document.documentElement.className = `theme-${theme}`;
      localStorage.setItem('theme', theme);
    }
  }

  getTheme(): string {
    return this.currentTheme;
  }

  private loadTheme(): void {
    const savedTheme = localStorage.getItem('theme') || 'light';
    this.setTheme(savedTheme);
  }
}