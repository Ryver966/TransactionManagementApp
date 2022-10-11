import { ITransaction } from './ITransaction';

export interface IAppStore {
  errorMsg: string;
  isLoading: boolean;
  transactions: ITransaction[];

  setErrorMsg: (val: string) => void;
  setIsLoading: (val: boolean) => void;
  setTransactions: (transactions: ITransaction[]) => void;
}
