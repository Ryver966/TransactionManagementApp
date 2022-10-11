import { ITransaction } from './ITransaction';

export interface IAppStore {
  isLoading: boolean;
  transactions: ITransaction[];

  setIsLoading: (val: boolean) => void;
  setTransactions: (transactions: ITransaction[]) => void;
}
