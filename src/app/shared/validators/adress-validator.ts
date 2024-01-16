import {AbstractControl, FormGroup, ValidationErrors, ValidatorFn} from '@angular/forms';

export function addressValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (control && control instanceof FormGroup) {
      const street = control.get('street')?.value;
      const zip = control.get('zip')?.value;
      const town = control.get('town')?.value;
      const number = control.get('number')?.value;

      const errors: ValidationErrors = {};

      // Your validation logic here

      return Object.keys(errors).length === 0 ? null : errors;
    }
    return null;
  };
}
