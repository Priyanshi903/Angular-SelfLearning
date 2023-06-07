import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";

export class CustomValidator {

  static forbiddenProjectNameCheck(control: FormControl): { [s: string]: boolean } {
    if (control.value === 'Test') {
      return { 'projectNameIsForbidden': true };
    }
    return null;
  }

  // with async validator
  static forbiddenProjectNameCheckAsync(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'TestProject') {
          resolve({ 'projectNameIsForbidden': true });
        } else
          resolve(null);
      }, 1500);
    });
    return promise;
  }
}
