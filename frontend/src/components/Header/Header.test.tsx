import { render } from '@testing-library/react';
import { Header } from './Header';

describe('Header', () => {
  test('should render correctly', () => {
    const { container } = render(<Header />);

    expect(container.querySelector('header')).toBeVisible();
  });
});
