import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidationService {
  static mustMatch(
    controlName: string,
    matchingControlName: string
  ): ValidatorFn {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const control = formGroup.get(controlName);
      const matchingControl = formGroup.get(matchingControlName);
      if (!control || !matchingControl) {
        console.log('empty Input');
        // return null;
        return {mustMatch: true}
      }
      if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
        return null;
      }
      if (control.value !== matchingControl.value) {
        console.log('not match');
        matchingControl.setErrors({ mustMatch: true });
        // return Error;
        return {mustMatch: true}
      } else {
        console.log('matching');
        matchingControl.setErrors(null);
        return null;
      }
    };
  }
}
