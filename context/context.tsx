import { NasaApodData } from '@/model/APOD';
import { NasaLibItem } from '@/model/NASALIB';
import React, { Dispatch } from 'react';

export interface GlobalStateType {
  apod: NasaApodData;
  NasaItems: NasaLibItem[];
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
  NasaItems: [],
};
const globalContext = React.createContext<GlobalStateType>(defaultGlobalState);
const dispatchContext = React.createContext<Dispatch<Partial<GlobalStateType>> | null>(null);

const useGlobalState = (): [GlobalStateType, Dispatch<Partial<GlobalStateType>>] => {
  const state = React.useContext(globalContext);
  const dispatch = React.useContext(dispatchContext);

  if (dispatch === null) {
    throw new Error('useGlobalState must be used within a GlobalStateProvider');
  }

  return [state, dispatch];
};

const GlobalStateProvider = ({ children }: ChildrenProps) => {
  const [state, dispatch] = React.useReducer(
    (state: GlobalStateType, action: Partial<GlobalStateType>) => ({ ...state, ...action }),
    defaultGlobalState
  );

  return (
    <globalContext.Provider value={state}>
      <dispatchContext.Provider value={dispatch}>{children}</dispatchContext.Provider>
    </globalContext.Provider>
  );
};

export { GlobalStateProvider, useGlobalState };
