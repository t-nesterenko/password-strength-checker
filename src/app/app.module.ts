import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordStrengthInputComponent } from './password-strength-input/password-strength-input.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, PasswordStrengthInputComponent]
})
export class AppComponent {
  title = 'Password Strength Checker';
}
