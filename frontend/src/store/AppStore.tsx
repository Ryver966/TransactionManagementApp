import React, { createContext, PropsWithChildren, useState } from 'react';
import { IAppStore } from '../interfaces/IAppStore';
import { ITransaction } from '../interfaces/ITransaction';

const initialState: IAppStore = {
  isLoading: false,
  transactions: [],

  setIsLoading: () => {},
  setTransactions: () => {},
};

export const AppContext = createContext<IAppStore>(initialState);

export const AppContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  /**
   * variables
   */
  const [transactions, setTransactions] = useState<ITransaction[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  /**
   * handlers
   */
  const updateIsLoading = (value: boolean) => setIsLoading(value);
  const updateTransactions = (transactions: ITransaction[]) => setTransactions(transactions);

  const value: IAppStore = {
    isLoading,
    transactions,

    setIsLoading: updateIsLoading,
    setTransactions: updateTransactions,
  };

  /**
   * renderer
   */
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
