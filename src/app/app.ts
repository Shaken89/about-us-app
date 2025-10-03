import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Routes } from '@angular/router';

export const routes: Routes = [];

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterOutlet]
})
export class App {
  title = 'About Our Team';
  mission = 'We build delightful software';
  photoUrl = 'assets/img.jpg';
;

  likes = 0;
  showMessage = false;

  name = '';
  email = '';
  subscribed = false;
  isButtonDisabled = true;
  

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

  toggleButton() {
    this.isButtonDisabled = !this.isButtonDisabled;
  }
}
