import cx from 'classnames';
import { RegisterOptions, UseFormRegister } from 'react-hook-form';

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  type?: 'text' | 'number';
  placeholder?: string;
  name: string;
  register?: UseFormRegister<any>;
  registerOptions?: RegisterOptions;
}

export const InputField: React.FC<IProps> = ({
  className,
  type = 'text',
  placeholder,
  register,
  registerOptions,
  name,
  ...restOfProps
}) => {
  /**
   * renderer
   */
  if (register) {
    return (
      <input
        type={type}
        placeholder={placeholder}
        {...register(name, registerOptions)}
        className={cx('p-2 text-black rounded', className)}
        {...restOfProps}
      />
    );
  }

  return (
    <input type={type} placeholder={placeholder} className={cx('p-2 text-black rounded', className)} {...restOfProps} />
  );
};
