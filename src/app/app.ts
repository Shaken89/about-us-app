import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Routes } from '@angular/router';

export const routes: Routes = [];

@Component({
  selector: 'app-root',
  templateUrl: './app.html',   // у тебя app.html
  styleUrls: ['./app.css'],    // у тебя app.css
  standalone: true,
  imports: [CommonModule, FormsModule, RouterOutlet]
})
export class App {
  // Interpolation
  title = 'About Our Team';
  mission = 'We build delightful software';

  // Property binding
  photoUrl = 'src/app/img.jpg';

  // Event binding
  likes = 0;
  showMessage = false;

  // Two-way binding
  name = '';
  email = '';
  subscribed = false;

  likeTeam() {
    this.likes++;
  }

  toggleMessage() {
    this.showMessage = !this.showMessage;
  }

  subscribe() {
    if (this.email.trim() !== '') {
      this.subscribed = true;
    }
  }
}
