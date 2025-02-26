import styles from './SelectField.module.css';
import DropdownIndicator from '../DropDownIndicator/DropDownIndicator.jsx';
import clsx from 'clsx';
import { capitalize } from '../../helpers/formatter/capitalize.js';
import AsyncSelect from 'react-select/async';
import { customStyles } from '../../helpers/customStyles/select.js';
import MenuList from '../MenuList/MenuList.jsx';

const SelectField = ({
  style,
  label,
  loadOptions,
  value,
  handleChangeValue,
}) => {
  return (
    <AsyncSelect
      cacheOptions
      autoFocus
      loadOptions={loadOptions}
      defaultOptions
      placeholder={capitalize(label)}
      components={{ DropdownIndicator, MenuList }}
      onChange={handleChangeValue}
      value={value}
      styles={{
        ...customStyles,
        option: (provided, state) => ({
          ...provided,
          color: state.isSelected
            ? 'var(--primary-txt-clr)'
            : 'var(--select-secondary-clr)',
          backgroundColor: state.isSelected
            ? 'var(--secondary-clr)'
            : provided.backgroundColor,
        }),
      }}
      className={clsx(styles['select-basic'], style && styles[style])}
      formatOptionLabel={option => {
        return (
          <div
            className={clsx(
              styles['option'],
              option.value === 'showAll' && styles['show-all'],
            )}
          >
            {option.label}
          </div>
        );
      }}
    />
  );
};

export default SelectField;
