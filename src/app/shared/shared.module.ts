import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    MaterialModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    MaterialModule
  ]
})

export class SharedModule {}
