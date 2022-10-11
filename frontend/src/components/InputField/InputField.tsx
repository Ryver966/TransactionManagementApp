import cx from 'classnames';
import { RegisterOptions, UseFormRegister } from 'react-hook-form';

interface IProps {
  className?: string;
  type?: 'text' | 'number';
  placeholder?: string;
  name: string;
  register: UseFormRegister<any>;
  registerOptions?: RegisterOptions;
}

export const InputField: React.FC<IProps> = ({
  className,
  type = 'text',
  placeholder,
  register,
  registerOptions,
  name,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      {...register(name, registerOptions)}
      className={cx('p-2 text-black rounded', className)}
    />
  );
};
