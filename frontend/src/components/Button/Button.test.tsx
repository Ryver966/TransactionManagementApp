import { fireEvent, render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  test('should render correctly regular Button', () => {
    const buttonText = 'Test Button';
    render(<Button text={buttonText} />);

    expect(screen.getByText(buttonText)).toBeVisible();
  });

  test('should render correctly disabled Button', () => {
    const buttonText = 'Test Button';
    render(<Button text={buttonText} disabled />);

    expect(screen.getByText(buttonText)).toBeVisible();
  });

  test('should correctly handle onClick', () => {
    const spy = jest.spyOn(console, 'log');
    const buttonText = 'Test Button';
    render(<Button text={buttonText} onClick={() => console.log('Test')} />);

    fireEvent.click(screen.getByText(buttonText));

    expect(screen.getByText(buttonText)).toBeVisible();
    expect(spy).toBeCalled();
  });
});
