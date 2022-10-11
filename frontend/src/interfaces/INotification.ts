import { ENotificationType } from '../enums/ENotificationTypes';

export interface INotification {
  type: ENotificationType;
  text: string;
}
