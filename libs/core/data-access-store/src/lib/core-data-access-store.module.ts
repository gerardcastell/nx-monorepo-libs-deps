import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromStore from './+state/store.reducer';
import { StoreEffects } from './+state/store.effects';
import { CoreEnvironmentsModule } from '@lab/core/environments';
@NgModule({
  imports: [CommonModule, CoreEnvironmentsModule],
})
export class CoreDataAccessStoreModule {}
