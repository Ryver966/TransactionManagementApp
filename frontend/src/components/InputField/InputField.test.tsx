import { render, screen } from '@testing-library/react';
import { InputField } from './InputField';

describe('InputField', () => {
  test('should render correctly InputField with value', () => {
    const valueText = 'Test Placeholder';
    render(<InputField name="test-field" value={valueText} onChange={() => {}} />);

    expect(screen.getByDisplayValue(valueText)).toBeVisible();
  });
});
