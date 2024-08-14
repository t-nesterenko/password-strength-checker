import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordStrengthInputComponent } from './password-strength-input.component';

describe('PasswordStrengthInputComponent', () => {
  let component: PasswordStrengthInputComponent;
  let fixture: ComponentFixture<PasswordStrengthInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasswordStrengthInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasswordStrengthInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
