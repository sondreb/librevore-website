import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApplicationForm } from '../../shared/types';
import { inject } from '@angular/core';

@Component({
  selector: 'app-join-us',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './join-us.component.html',
  styleUrl: './join-us.component.scss'
})
export class JoinUsComponent {
  private formBuilder = inject(FormBuilder);
  
  formSubmitted = signal(false);
  isLoading = signal(false);
  formError = signal<string | null>(null);

  applicationForm = this.formBuilder.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required]],
    familySize: [2, [Validators.required, Validators.min(1)]],
    numberOfChildren: [0, [Validators.required, Validators.min(0)]],
    childrenAges: [''],
    voluntaryismUnderstanding: ['', [Validators.required, Validators.minLength(50)]],
    healthyLivingPractices: ['', [Validators.required, Validators.minLength(50)]],
    selfSustainabilityExperience: ['', [Validators.required, Validators.minLength(50)]],
    whyJoin: ['', [Validators.required, Validators.minLength(50)]],
    additionalInfo: ['']
  });

  async onSubmit() {
    if (this.applicationForm.invalid) {
      this.markFormGroupTouched(this.applicationForm);
      return;
    }

    this.isLoading.set(true);
    this.formError.set(null);

    try {
      // In a real application, you would send this to a server
      // For this example, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const formData: ApplicationForm = this.applicationForm.value as ApplicationForm;
      console.log('Form submitted:', formData);

      this.formSubmitted.set(true);
      this.applicationForm.reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      this.formError.set('There was an error submitting your application. Please try again later.');
    } finally {
      this.isLoading.set(false);
    }
  }

  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      
      if ((control as any).controls) {
        this.markFormGroupTouched(control as FormGroup);
      }
    });
  }

  shouldShowError(controlName: string): boolean {
    const control = this.applicationForm.get(controlName);
    return !!control && control.invalid && (control.dirty || control.touched);
  }

  getErrorMessage(controlName: string): string {
    const control = this.applicationForm.get(controlName);
    
    if (!control || control.valid) {
      return '';
    }
    
    if (control.errors?.['required']) {
      return 'This field is required';
    }
    
    if (control.errors?.['email']) {
      return 'Please enter a valid email address';
    }
    
    if (control.errors?.['minLength']) {
      return 'Please provide more details (at least 50 characters)';
    }
    
    if (control.errors?.['min']) {
      return 'Value must be at least ' + control.errors?.['min'].min;
    }
    
    return 'This field has an error';
  }
}
