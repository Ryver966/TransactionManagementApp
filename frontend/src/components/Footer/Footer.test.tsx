import { render } from '@testing-library/react';
import { Footer } from './Footer';

describe('Footer', () => {
  test('should render correctly', () => {
    const { container } = render(<Footer />);

    expect(container.querySelector('footer')).toBeVisible();
  });
});
