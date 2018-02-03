import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-stop-training',
  template: `<section class="dialog">
              <h1 mat-dialog-title fxLayoutAlign="center">Are you sure?</h1>
              <mat-dialog-content>
                <p>You are already at {{ passedData.progress }}%</p>
              </mat-dialog-content>
              <mat-dialog-actions fxLayoutAlign="center">
                <button mat-button [mat-dialog-close]="true">Yes</button>
                <button mat-button [mat-dialog-close]="false">No</button>
              </mat-dialog-actions>
            <section>`,
  styles: ['p {text-align: center;}']
})

export class StopTrainingComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public passedData: any) {

  }
}
