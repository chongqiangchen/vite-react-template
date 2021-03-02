import { TypedEvent } from './event';

export interface Store {}

let store: Store = {};

export const getStore = () => store;

export const initStore = (newStore: Store) => {
  store = newStore;
};

export const mergeStore = (data: Partial<Store>) => {
  store = {
    ...store,
    ...data,
  };
  storeEvent.emit(store);
};

export const storeEvent = new TypedEvent<typeof store>();
