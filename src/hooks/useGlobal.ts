import { useContext } from 'react';
import { GlobalContext } from '../context/global-context';

export const useGlobal = () => {
  return useContext(GlobalContext);
};
