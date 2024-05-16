import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruncatePipe } from './pipes/limit-text.pipe';
import { CustomDatePipe} from './pipes/custom-date.pipe'



@NgModule({
  declarations: [TruncatePipe,CustomDatePipe],
  imports: [
    CommonModule
  ],
  exports: [
    TruncatePipe,
    CustomDatePipe
  ]
})
export class SharedModule { }
