import { useContext } from 'react';
import { AppContext } from '../../store/AppStore';
import { InputField } from '../InputField/InputField';

export const FilterTransactions: React.FC = () => {
  /**
   * variables
   */
  const { filterTerm, setTransactions, setFilterTerm } = useContext(AppContext);

  /**
   * effects
   */

  /**
   * renderer
   */
  return (
    <InputField
      className="max-w-md w-full"
      name="filter"
      placeholder="Filter Transactions"
      value={filterTerm}
      onChange={(e) => setFilterTerm(e.target.value)}
    />
  );
};
