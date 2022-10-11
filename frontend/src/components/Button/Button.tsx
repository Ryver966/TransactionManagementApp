import cx from 'classnames';

interface IProps {
  className?: string;
  text: string;
  disabled?: boolean;
  onClick?: () => void;
}

export const Button: React.FC<IProps> = ({ className, text, disabled, onClick }) => {
  /**
   * renderer
   */
  return (
    <button
      onClick={onClick}
      className={cx('p-2 rounded bg-blue', className, {
        'bg-grey': disabled,
      })}
      disabled={disabled}
    >
      {text}
    </button>
  );
};
