import { Component, OnInit } from '@angular/core';
import * as fromDataAccessStore from '@lab/core/data-access-store';
import { Store } from '@ngrx/store';
import { take } from 'rxjs/operators';
@Component({
  selector: 'lab-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'app-lab';

  constructor(private store: Store) {}
  ngOnInit() {
    console.log('Init component');
    this.store
      .select(fromDataAccessStore.getStoreState)
      .pipe(take(1))
      .subscribe((val) => console.log(val));
  }
}
