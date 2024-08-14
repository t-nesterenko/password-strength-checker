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
  public passwordControl = new FormControl('');
  private _passwordStrength: string = 'Empty';

  get passwordStrength(): string {
    return this._passwordStrength;
  }

  constructor() {
    this.passwordControl.valueChanges.subscribe(value => {
      this._passwordStrength = this.calculateStrength(value ?? '');
    });
  }

  private calculateStrength(password: string): string {
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
