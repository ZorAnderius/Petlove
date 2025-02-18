import { useId } from 'react';
import styles from './FilterRadio.module.css';
import clsx from 'clsx';
import Icon from '../Icon/Icon.jsx';
import Button from '../Button/Button.jsx';

const FilterRadio = ({ value, nameRadio, selected, resetRadio }) => {
  const labelId = useId();
  return (
    <label
      htmlFor={labelId}
      className={clsx(styles['radio-container'], selected && styles['active'])}
    >
      <input
        id={labelId}
        name={nameRadio}
        type="radio"
        value={value}
        className={styles['radio-input']}
      />
      <p>{value}</p>
      {selected && (
        <Button type='button' style="clear-btn" handleClick={resetRadio}>
          <Icon name="cross-small" size={18} />
        </Button>
      )}
    </label>
  );
};

export default FilterRadio;
