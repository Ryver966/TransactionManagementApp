import { render } from '@testing-library/react';
import { ENotificationType } from '../../enums/ENotificationTypes';
import { NotificationBanner } from './NotificationBanner';

const onClose = jest.fn();

const errorMessage = {
  type: ENotificationType.Error,
  text: 'Example of error message',
};

const successMessage = {
  type: ENotificationType.Success,
  text: 'Example of success message',
};

describe('NotificationBanner', () => {
  it('should render correctly error notification', () => {
    const { container } = render(<NotificationBanner message={errorMessage} onClose={onClose} />);

    expect(container?.firstChild).toHaveClass('bg-red-light');
  });

  it('should render correctly success notification', () => {
    const { container } = render(<NotificationBanner message={successMessage} onClose={onClose} />);

    expect(container?.firstChild).toHaveClass('bg-green-light');
  });
});
