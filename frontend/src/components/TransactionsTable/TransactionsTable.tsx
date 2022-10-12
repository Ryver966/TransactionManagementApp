import { AxiosError } from 'axios';
import moment from 'moment';
import { useContext } from 'react';
import { TransactionApi } from '../../apis/Transaction';
import { AppContext } from '../../store/AppStore';
import { formatCurrency } from '../../utils/formatNumbers';
import { Button } from '../Button/Button';

interface IProps {
  onSuccessHandler: () => void;
  onErrorHandler: (errMsg: string) => void;
}

export const TransactionsTable: React.FC<IProps> = ({ onSuccessHandler, onErrorHandler }) => {
  /**
   * variables
   */
  const { filterTerm, transactions, wasLastList, setTransactions, increaseCurrPage } = useContext(AppContext);

  /**
   * handlers
   */
  const onDelete = async (id: number) => {
    try {
      await TransactionApi.delete({ id });
      setTransactions(transactions.filter((t) => t.id !== id));
      onSuccessHandler();
    } catch (e) {
      const err = e as AxiosError;
      onErrorHandler(err.message);
    }
  };

  /**
   * renderer
   */
  return (
    <div className="flex flex-col items-center w-full">
      <table className="max-h-96 text-xs lg:text-sm mb-4 w-full text-center">
        <tr>
          <th>Amount</th>
          <th>Beneficiary</th>
          <th>Address</th>
          <th className="hidden xl:block">Description</th>
          <th>Date</th>
        </tr>
        {transactions.map((t) => (
          <tr key={t.id} className="align-middleh-auto ">
            <td className="p-2">{formatCurrency(t.amount)}</td>
            <td className="p-2 h-full">{t.beneficiary}</td>
            <td className="p-2">{t.address}</td>
            <td className="hidden xl:block p-2">{t.description}</td>
            <td className="p-2">{moment(t.date).format('DD.MM.YYYY')}</td>
            <td className="p-2">
              <button onClick={() => onDelete(t.id)}>
                <svg
                  height="24px"
                  id="Layer_1"
                  version="1.1"
                  viewBox="0 0 512 512"
                  width="24px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4  L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1  c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1  c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z" />
                </svg>
              </button>
            </td>
          </tr>
        ))}
      </table>

      {!wasLastList && !filterTerm && <Button text="Load More" onClick={increaseCurrPage} />}
    </div>
  );
};
