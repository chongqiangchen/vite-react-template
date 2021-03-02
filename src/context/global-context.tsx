import React, { useEffect, useState, useRef } from 'react';
import { getStore, Store, storeEvent, mergeStore } from '../services/global';

export interface GlobalContextValue {
  store: Store;
  appName: String;
}

function getInitialValue() {
  return {
    store: getStore(),
    appName: 'test-app',
    updateStore(data: Partial<Store>) {
      mergeStore(data);
      return getStore();
    },
  };
}

export const GlobalContext = React.createContext<GlobalContextValue>(getInitialValue());

export const GlobalContextProvider = (props: any) => {
  const context = useRef<GlobalContextValue>(getInitialValue());
  const rerender = useState<{}>()[1];

  useEffect(function () {
    const { dispose } = storeEvent.on((store) => {
      context.current = {
        ...context.current,
        store,
      };
      rerender({});
    });
    return function () {
      dispose();
    };
  }, []);

  return <GlobalContext.Provider value={context.current}>{props.children}</GlobalContext.Provider>;
};
