import { render, screen } from '@testing-library/react';
import { appContextWrapper } from '../../__mocks__/AppContextMocks';
import { FilterTransactions } from './FilterTransactions';

describe('FilterTransactions', () => {
  test('should render correctlyt', () => {
    render(<FilterTransactions />, {
      wrapper: appContextWrapper,
    });

    expect(screen.getByPlaceholderText(/Filter Transactions/i)).toBeInTheDocument();
  });
});
