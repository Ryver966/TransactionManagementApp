import { render, screen } from '@testing-library/react';
import { appContextWrapper } from '../../__mocks__/AppContextMocks';
import { onErrorHandler, onSuccessHandler } from '../../__mocks__/mocks';
import { TransactionsTable } from './TransactionsTable';

describe('TransactionTable', () => {
  test('should render correctly with mock transactions list', () => {
    render(<TransactionsTable onSuccessHandler={onSuccessHandler} onErrorHandler={onErrorHandler} />, {
      wrapper: appContextWrapper,
    });

    expect(screen.getByText('Callie Nieves')).toBeInTheDocument();
    expect(screen.getByText('Amie Whitley')).toBeInTheDocument();
  });
});
