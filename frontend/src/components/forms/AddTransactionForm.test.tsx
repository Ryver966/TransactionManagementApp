import { render, screen } from '@testing-library/react';
import { onErrorHandler, onSuccessHandler } from '../../__mocks__/mocks';
import { AddTransactionForm } from './AddTransactionForm';

describe('AddTransactionForm', () => {
  it('should render the basic fields', () => {
    render(<AddTransactionForm onSuccessHandler={onSuccessHandler} onErrorHandler={onErrorHandler} />);

    expect(screen.getByPlaceholderText(/Amount/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Account/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Beneficiary/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Address/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Description/i)).toBeInTheDocument();

    expect(screen.getByText('Create transaction')).toBeInTheDocument();
  });
});
