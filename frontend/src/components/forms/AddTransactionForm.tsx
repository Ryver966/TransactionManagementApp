import { AxiosError } from 'axios';
import { SubmitHandler, useForm } from 'react-hook-form';
import { TransactionApi } from '../../apis/Transaction';
import { Button } from '../Button/Button';
import { InputField } from '../InputField/InputField';

export interface IAddTransactionFormValues {
  amount: number;
  account: number;
  address: string;
  description: string;
}

interface IProps {
  onSuccessHandler: () => void;
  onErrorHandler: (errMsg: string) => void;
}

export const AddTransactionForm: React.FC<IProps> = ({ onSuccessHandler, onErrorHandler }) => {
  /**
   * variables
   */
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, isDirty, isValid, errors },
  } = useForm<IAddTransactionFormValues>({ mode: 'onChange' });

  /**
   * handlers
   */
  const onSubmit: SubmitHandler<IAddTransactionFormValues> = async (data) => {
    try {
      await TransactionApi.create(data as any);

      onSuccessHandler();
      reset();
    } catch (e) {
      const err = e as AxiosError;
      onErrorHandler(err.message);
    }
  };

  /**
   * renderer
   */
  return (
    <form className="flex flex-col items-center" onSubmit={handleSubmit(onSubmit)}>
      <InputField
        className="mb-4 w-full max-w-md"
        placeholder="Amount"
        type="number"
        register={register}
        registerOptions={{
          required: true,
          valueAsNumber: true,
          validate: (val) => val > 0,
        }}
        name="amount"
      />
      <InputField
        className="mb-4 w-full max-w-md"
        placeholder="Account Number"
        type="number"
        register={register}
        registerOptions={{ required: true, valueAsNumber: true }}
        name="account"
      />
      <InputField
        className="mb-4 w-full max-w-md"
        placeholder="Address"
        register={register}
        registerOptions={{ required: true }}
        name="address"
      />
      <InputField
        className="mb-4 w-full max-w-md"
        placeholder="Description"
        register={register}
        registerOptions={{ required: true }}
        name="description"
      />

      <Button text="Create transaction" disabled={isSubmitting || !isDirty || !isValid} />
    </form>
  );
};
