import { createFeatureSelector, createSelector } from '@ngrx/store';
import { STORE_FEATURE_KEY, State, storeAdapter } from './store.reducer';

// Lookup the 'Store' feature state managed by NgRx
export const getStoreState = createFeatureSelector<State>(STORE_FEATURE_KEY);

const { selectAll, selectEntities } = storeAdapter.getSelectors();

export const getStoreLoaded = createSelector(
  getStoreState,
  (state: State) => state.loaded
);

export const getStoreError = createSelector(
  getStoreState,
  (state: State) => state.error
);

export const getAllStore = createSelector(getStoreState, (state: State) =>
  selectAll(state)
);

export const getStoreEntities = createSelector(getStoreState, (state: State) =>
  selectEntities(state)
);

export const getSelectedId = createSelector(
  getStoreState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getStoreEntities,
  getSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
