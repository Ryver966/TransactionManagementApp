import React, { useContext, useEffect } from 'react';
import { TransactionApi } from '../../apis/Transaction';
import { LoadingModal } from '../../components/LoadingModal/LodaingModal';
import { AppContext } from '../../store/AppStore';

export const VMainScreen: React.FC = () => {
  /**
   * variables
   */
  const { isLoading, transactions, setIsLoading, setTransactions } = useContext(AppContext);
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
        console.log(e);
        setTimeout(() => setIsLoading(false), 1000);
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
