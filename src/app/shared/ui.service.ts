import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/subject';
import { MatSnackBar } from '@angular/material';


@Injectable()
export class UIService {
  loadingStateChanged = new Subject<boolean>();

  constructor(private snackBar: MatSnackBar) {}

  showSnackbar(message, action, duration) {
    this.snackBar.open(message, action, { duration: duration });
  }
}
