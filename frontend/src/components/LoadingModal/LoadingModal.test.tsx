import { render } from '@testing-library/react';
import { LoadingModal } from './LodaingModal';

describe('LoadingModal', () => {
  test('should render correctly', () => {
    const { container } = render(<LoadingModal isVisible />);

    expect(container.querySelector('svg')).toBeVisible();
  });
});
