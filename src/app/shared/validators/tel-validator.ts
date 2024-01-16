import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

export function telValidator(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const belgianPhoneRegex = /^(?:\+32|0032|0)[1-9](\d{1})?(\d{6,7}|\d{8})$/;
    const valid = belgianPhoneRegex.test(control.value);
    return valid ? null : { 'tel': 'Invalid Belgian phone number' };
  };
}
