import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromStore from '@lab/core/data-access-store';
import { StoreEffects } from '@lab/core/data-access-store';
import { AppComponent } from './app.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot(fromStore.reducer),
    EffectsModule.forRoot([StoreEffects]),
    StoreDevtoolsModule.instrument(),
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
