import { AbstractControl } from '@angular/forms';

export function passwordValidator(control: AbstractControl) {

    const atLeastOneCapitalLetter = new RegExp(/[A-Z]{1,}/);

    if (!((control.value?.length >= 6) && atLeastOneCapitalLetter.test(control.value))) {
        return { invalid_password: true };
    }
    return null;
}