import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarsComponent } from './mars.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [MarsComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ]
})
export class MarsModule { }
