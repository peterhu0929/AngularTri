import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Code2namePipe } from './code2name.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [Code2namePipe],
  exports: [Code2namePipe]
})
export class PipeModule { }
