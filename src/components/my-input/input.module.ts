import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { InputTextModule } from 'primeng/inputtext';

import { MyInputComponent } from './input.component';

@NgModule({
  declarations: [MyInputComponent],
  imports: [InputTextModule, CommonModule, FormsModule],
  exports: [MyInputComponent],
})
export class ChrInputModule {}
