import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentAComponent } from './component-a/component-a.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ComponentAComponent],
  exports: [ComponentAComponent],
})
export class CoreBuildableModule {}
