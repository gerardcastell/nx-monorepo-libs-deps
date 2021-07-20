import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as StoreActions from './store.actions';
import { StoreEntity } from './store.models';

import { environment } from '@lab/core/environments';
// import { environment as envPublishable } from '@lab/core/publishable';

export const STORE_FEATURE_KEY = 'store';

export interface State extends EntityState<StoreEntity> {
  selectedId?: string | number; // which Store record has been selected
  loaded: boolean; // has the Store list been loaded
  error?: string | null; // last known error (if any)
}

export interface StorePartialState {
  readonly [STORE_FEATURE_KEY]: State;
}

export const storeAdapter: EntityAdapter<StoreEntity> =
  createEntityAdapter<StoreEntity>();

export const initialState: State = storeAdapter.getInitialState({
  // set initial required properties
  env: environment.api,
  // env: envPublishable.api,
  loaded: false,
});

const storeReducer = createReducer(
  initialState,
  on(StoreActions.init, (state) => ({ ...state, loaded: false, error: null })),
  on(StoreActions.loadStoreSuccess, (state, { store }) =>
    storeAdapter.setAll(store, { ...state, loaded: true })
  ),
  on(StoreActions.loadStoreFailure, (state, { error }) => ({ ...state, error }))
);

export function reducer(state: State | undefined, action: Action) {
  return storeReducer(state, action);
}
