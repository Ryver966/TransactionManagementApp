import React, { createContext, PropsWithChildren, useEffect, useRef, useState } from 'react';
import { TransactionApi } from '../apis/Transaction';
import { IAppStore } from '../interfaces/IAppStore';
import { ITransaction } from '../interfaces/ITransaction';

const initialState: IAppStore = {
  filterTerm: '',
  isLoading: false,
  transactions: [],
  wasLastList: false,

  setIsLoading: () => {},
  setTransactions: () => {},
  setFilterTerm: () => {},
  increaseCurrPage: () => {},
};

export const AppContext = createContext<IAppStore>(initialState);

export const AppContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  /**
   * variables
   */

  const isFirstRun = useRef(true);
  const [transactions, setTransactions] = useState<ITransaction[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currPage, setCurrPage] = useState(1);
  const [prevPage, setPrevPage] = useState(0);
  const [wasLastList, setWasLastList] = useState(false);
  const [filterTerm, setFilterTerm] = useState('');

  /**
   * effects
   */
  useEffect(() => {
    const timer = setTimeout(async () => {
      if (!filterTerm) {
        if (!isFirstRun.current) {
          setTransactions([]);
          setCurrPage(1);
          setPrevPage(0);
          setWasLastList(false);
        } else {
          isFirstRun.current = false;
        }
      } else {
        const resp = await TransactionApi.get({ params: `beneficiary_like=${filterTerm}` });
        setTransactions(resp);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [filterTerm]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await TransactionApi.get({ params: `_limit=20&_page=${currPage}` });
      if (!response.length) {
        setWasLastList(true);
        return;
      }
      setPrevPage(currPage);
      setTransactions([...transactions, ...response]);
    };
    if (!wasLastList && prevPage !== currPage) {
      fetchData();
    }
  }, [currPage, wasLastList, prevPage]);

  /**
   * handlers
   */
  const updateIsLoading = (value: boolean) => setIsLoading(value);
  const updateTransactions = (transactions: ITransaction[]) => setTransactions(transactions);
  const updateFilterTerm = (value: string) => setFilterTerm(value);
  const increaseCurrPage = () => setCurrPage(currPage + 1);

  const value: IAppStore = {
    filterTerm,
    isLoading,
    transactions,
    wasLastList,

    setIsLoading: updateIsLoading,
    setTransactions: updateTransactions,
    setFilterTerm: updateFilterTerm,
    increaseCurrPage,
  };

  /**
   * renderer
   */
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
