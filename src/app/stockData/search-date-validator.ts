import { AbstractControl, FormGroup } from "@angular/forms";

export function dateFormatValidator(control: AbstractControl): { [key: string]: boolean } | null {

    const searchDate = control as FormGroup;

    const text = searchDate.value;

    const dateRegEx = new RegExp(/^(\d{1})-(January|February|March|April|May|June|July|August|September|October|November|December)-(\d{4})$/)

    const valid = dateRegEx.test(text);
    
    if (!valid && text !== '') {
        return { dateFormat: true };
    }
    return null;
}