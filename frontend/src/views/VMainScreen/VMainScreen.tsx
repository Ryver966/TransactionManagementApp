import React, { useContext, useState } from 'react';
import { FilterTransactions } from '../../components/FilterTransactions/FilterTransactions';
import { AddTransactionForm } from '../../components/forms/AddTransactionForm';
import { NotificationBanner } from '../../components/NotificationBanner/NotificationBanner';
import { TransactionsTable } from '../../components/TransactionsTable/TransactionsTable';
import { ENotificationType } from '../../enums/ENotificationTypes';
import { INotification } from '../../interfaces/INotification';
import { AppContext } from '../../store/AppStore';

export const VMainScreen: React.FC = () => {
  /**
   * variables
   */
  const { transactions } = useContext(AppContext);
  const [notification, setNotification] = useState<INotification | null>(null);

  /**
   * handlers
   */
  const onResultHandler = (type: ENotificationType, message: string) => {
    setNotification({
      type,
      text: message,
    });

    setTimeout(() => {
      if (notification) {
        setNotification(null);
      }
    }, 30000);
  };

  /**
   * renderer
   */
  return (
    <>
      <NotificationBanner message={notification} onClose={() => setNotification(null)} />
      <main className="flex flex-1 flex-col w-full max-w-7xl mx-auto py-4 overflow-scroll">
        <div className="flex flex-col md:flex-row-reverse">
          <div className="text-white px-4 md:flex-1">
            <AddTransactionForm
              onSuccessHandler={() =>
                onResultHandler(ENotificationType.Success, 'New transaction created successfully!')
              }
              onErrorHandler={(errMsg) => onResultHandler(ENotificationType.Error, errMsg || 'Unknown error')}
            />
          </div>

          <div className="md:flex-1 mt-4 text-xs md:text-sm md:mt-0 px-4 flex flex-col items-center">
            <FilterTransactions />
          </div>
        </div>

        <div className="mt-4 overflow-scroll w-full">
          <TransactionsTable
            onSuccessHandler={() => onResultHandler(ENotificationType.Success, 'Transaction removed successfully!')}
            onErrorHandler={(errMsg) => onResultHandler(ENotificationType.Error, errMsg || 'Unknown error')}
          />
        </div>
      </main>
    </>
  );
};
