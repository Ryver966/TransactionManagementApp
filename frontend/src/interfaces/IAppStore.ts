import { ITransaction } from './ITransaction';

export interface IAppStore {
  filterTerm: string;
  isLoading: boolean;
  transactions: ITransaction[];
  wasLastList: boolean;

  setIsLoading: (val: boolean) => void;
  setTransactions: (transactions: ITransaction[]) => void;
  setFilterTerm: (val: string) => void;
  increaseCurrPage: () => void;
}
