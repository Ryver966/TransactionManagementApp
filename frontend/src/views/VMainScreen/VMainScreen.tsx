import { AxiosError } from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { TransactionApi } from '../../apis/Transaction';
import { AddTransactionForm } from '../../components/forms/AddTransactionForm';
import { LoadingModal } from '../../components/LoadingModal/LodaingModal';
import { NotificationBanner } from '../../components/NotificationBanner/NotificationBanner';
import { ENotificationType } from '../../enums/ENotificationTypes';
import { INotification } from '../../interfaces/INotification';
import { AppContext } from '../../store/AppStore';
import { formatCurrency } from '../../utils/formatNumbers';

export const VMainScreen: React.FC = () => {
  /**
   * variables
   */
  const { isLoading, transactions, setIsLoading, setTransactions } = useContext(AppContext);
  const [notification, setNotification] = useState<INotification | null>(null);
  const balance = transactions.reduce((acc, x) => (acc += x?.amount), 0);

  /**
   * handlers
   */
  const createTransactionOnSuccessHandler = () => {
    setNotification({
      type: ENotificationType.Success,
      text: 'New transaction created successfully!',
    });
  };

  const createTransactionOnErrorHandler = (errMsg: string) => {
    setNotification({
      type: ENotificationType.Error,
      text: errMsg || 'Unknown error',
    });

    setTimeout(() => {
      if (notification) {
        setNotification(null);
      }
    }, 30000);
  };

  /**
   * effects
   */
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const transactionsList = await TransactionApi.get({});

        setTransactions(transactionsList);
        setTimeout(() => setIsLoading(false), 1000);
      } catch (e) {
        const err = e as AxiosError;
        setTimeout(() => {
          setIsLoading(false);
          setNotification({
            type: ENotificationType.Error,
            text: err.message || 'Unknown error',
          });
        }, 1000);

        setTimeout(() => {
          if (notification) {
            setNotification(null);
          }
        }, 30000);
      }
    };

    fetchData();
  }, []);

  /**
   * renderer
   */
  return (
    <>
      <LoadingModal isVisible={isLoading} />
      <NotificationBanner message={notification} onClose={() => setNotification(null)} />
      <main className="flex flex-1 flex-col max-w-5xl mx-auto pt-4">
        <div className="flex flex-col md:flex-row-reverse">
          <div className="text-white px-4 md:flex-1">
            <AddTransactionForm
              onSuccessHandler={createTransactionOnSuccessHandler}
              onErrorHandler={createTransactionOnErrorHandler}
            />
          </div>

          <div className="md:flex-1">
            <p>{formatCurrency(balance)}</p>
          </div>
        </div>
      </main>
    </>
  );
};
