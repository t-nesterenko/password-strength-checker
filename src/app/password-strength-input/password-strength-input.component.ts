import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-password-strength-input',
  standalone: true,
  templateUrl: './password-strength-input.component.html',
  styleUrls: ['./password-strength-input.component.css'],
  imports: [CommonModule, ReactiveFormsModule]
})
export class PasswordStrengthInputComponent {
  passwordControl = new FormControl('');
  passwordStrength: string = 'empty'; // Default to 'empty'

  constructor() {
    this.passwordControl.valueChanges.subscribe(value => {
      this.passwordStrength = this.calculateStrength(value ?? '');
    });
  }

  calculateStrength(password: string): string {
    if (!password) return 'empty';
    if (password.length < 8) return 'weak';

    const hasLetters = /[a-zA-Z]/.test(password);
    const hasDigits = /\d/.test(password);
    const hasSymbols = /[\W_]/.test(password);

    if (hasLetters && hasDigits && hasSymbols) return 'strong';
    if ((hasLetters && hasDigits) || (hasLetters && hasSymbols) || (hasDigits && hasSymbols)) return 'medium';
    return 'weak';
  }
}
