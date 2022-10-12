import { PropsWithChildren } from 'react';
import { IAppStore } from '../interfaces/IAppStore';
import { AppContext } from '../store/AppStore';

export const appContextValueMock: IAppStore = {
  filterTerm: '',
  isLoading: false,
  transactions: [
    {
      id: 0,
      amount: -2008.75,
      beneficiary: 'Callie Nieves',
      account: 'PL10104092290785174000000000',
      address: '185 Berkeley Place, Brady, West Virginia, 7409',
      date: '2021-12-15T01:05:42',
      description: 'Amet amet qui proident sint esse adipisicing amet.',
    },
    {
      id: 1,
      amount: -2038.61,
      beneficiary: 'Amie Whitley',
      account: 'PL10103486643679406000000000',
      address: '827 Dahl Court, Stagecoach, Louisiana, 3343',
      date: '2019-12-12T06:58:38',
      description: 'Occaecat nulla Lorem id ullamco.',
    },
  ],

  wasLastList: false,

  setIsLoading: jest.fn(),
  setTransactions: jest.fn(),
  setFilterTerm: jest.fn(),
  increaseCurrPage: jest.fn(),
};

export const appContextWrapper: React.FC<PropsWithChildren> = ({ children }) => (
  <AppContext.Provider value={appContextValueMock}>{children}</AppContext.Provider>
);
