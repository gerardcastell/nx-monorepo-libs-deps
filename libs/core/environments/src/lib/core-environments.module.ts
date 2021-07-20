import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from './environment';

@NgModule({
  imports: [CommonModule],
  providers: [environment],
})
export class CoreEnvironmentsModule {}
