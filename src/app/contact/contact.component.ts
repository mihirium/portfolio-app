import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Required for ngIf, etc.

@Component({
  selector: 'app-contact',
  standalone: true, // ✅ Important
  imports: [CommonModule, ReactiveFormsModule], // ✅ Add modules here
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Submitted Email:', this.contactForm.value.email);
    }
  }

  get email() {
    return this.contactForm.get('email');
  }
}
