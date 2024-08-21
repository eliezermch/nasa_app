import { NasaApodData } from '@/model/APOD';
import React from 'react';

interface GoblalStateType {
  apod: NasaApodData;
}

interface ChildrenProps {
  children?: React.ReactNode;
}

const defaultGlobalState = {
  apod: {
    date: '',
    explanation: '',
    hdurl: '',
    media_type: '',
    service_version: '',
    title: '',
    url: '',
  },
};
const globalContext = React.createContext<GoblalStateType>(defaultGlobalState);
const dispatchContext = React.createContext<ReducerType>(undefined);

const useGlobatState = () => [React.useContext(globalContext), React.useContext(dispatchContext)];

type ReducerType = GoblalStateType | undefined | any;

const GlobalStateProvider = ({ children }: ChildrenProps) => {
  const [state, dispatch] = React.useReducer(
    (state: GoblalStateType, action: ReducerType) => ({ ...state, ...action }),
    defaultGlobalState
  );

  return (
    <globalContext.Provider value={state}>
      <dispatchContext.Provider value={dispatch}>{children}</dispatchContext.Provider>
    </globalContext.Provider>
  );
};

export { GlobalStateProvider, useGlobatState };
