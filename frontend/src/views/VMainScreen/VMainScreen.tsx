import { AxiosError } from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { TransactionApi } from '../../apis/Transaction';
import { LoadingModal } from '../../components/LoadingModal/LodaingModal';
import { NotificationBanner } from '../../components/NotificationBanner/NotificationBanner';
import { ENotificationType } from '../../enums/ENotificationTypes';
import { INotification } from '../../interfaces/INotification';
import { AppContext } from '../../store/AppStore';

export const VMainScreen: React.FC = () => {
  /**
   * variables
   */
  const { isLoading, transactions, setIsLoading, setTransactions } = useContext(AppContext);
  const [error, setError] = useState<INotification | null>(null);
  const balance = transactions.reduce((acc, x) => (acc += x?.amount), 0);

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
          setError({
            type: ENotificationType.Error,
            text: err.message || 'Unknown error',
          });
        }, 1000);

        setTimeout(() => {
          if (error) {
            setError(null);
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
      <NotificationBanner message={error} onClose={() => setError(null)} />
      <main className="flex flex-1 flex-col">
        <div className="flex flex-col">
          <div className="bg-black text-white">FORM MOCK</div>

          <div>
            <p>{balance}</p>
          </div>
        </div>
      </main>
    </>
  );
};
