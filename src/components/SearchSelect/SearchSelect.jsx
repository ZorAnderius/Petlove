import { useForm, Controller } from 'react-hook-form';
import styles from './SearchSelect.module.css';
import { useCallback, useEffect, useState } from 'react';
import Button from '../Button/Button.jsx';
import Icon from '../Icon/Icon.jsx';
import AsyncSelect from 'react-select/async';
import { capitalize } from '../../helpers/formatter/capitalize.js';
import { customStyles } from '../../helpers/customStyles/select.js';
import { yupResolver } from '@hookform/resolvers/yup';
import { locationSchema } from '../../helpers/validationSchema/locationSchema.js';
import MenuList from '../MenuList/MenuList.jsx';

const searchSelectStyle = {
  ...customStyles,
  valueContainer: provided => ({
    ...provided,
    maxWidth: '159px',
    margin: '0 14px',
    padding: '0px',
  }),
  dropdownIndicator: provided => ({ ...provided, display: 'none' }),
  loadingIndicator: provided => ({ ...provided, display: 'none' }),
};

const highlightText = (text, query) => {
  if (!query) return text;

  const regax = new RegExp(`(${query})`, 'gi');
  return text.split(regax).map((part, index) =>
    part.toLowerCase() === query.toLowerCase() ? (
      <span key={index} className={styles['highlight-txt']}>
        {part}
      </span>
    ) : (
      part
    ),
  );
};

const SearchSelect = ({ style, loadOptions, value, handleChangeValue }) => {
  const { control, handleSubmit, setValue } = useForm({
    resolver: yupResolver(locationSchema),
  });
  const [isVisible, setIsVisible] = useState(false);
  const [inputText, setInputText] = useState('');

  const handleClearFilter = useCallback(() => {
    setIsVisible(false);
    handleChangeValue(null);
    setInputText('');
    setValue(style, null);
  }, [handleChangeValue, setValue, style]);

  const handleInputChange = async (value, { action }) => {
    if (action === 'input-change') {
      if (!value) {
        handleClearFilter();
      } else {
        setValue(style, { label: value, value }, { shouldValidate: true });
        setInputText(value);
        setIsVisible(true);
      }
    }
  };

  const handleChange = (option, field) => {
    handleChangeValue(option);
    setInputText(option ? option?.label : inputText);
    setIsVisible(true);
    setValue(style, option ? option : null, {
      shouldValidate: true,
    });
    field.onChange(option);
  };

  const loadFilterOptions = inputValue => {
    if (inputValue.length >= 3) {
      return loadOptions(inputValue);
    }
  };

  const onSubmit = data => {
    console.log(data);
  };

  useEffect(() => {
    setInputText(value?.label);
    value?.label ? setIsVisible(true) : setIsVisible(false);
  }, [setInputText, value]);

  useEffect(() => {
    if (!value?.label) handleClearFilter();
  }, [handleClearFilter, value]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={styles['search-select-form']}
    >
      <Controller
        name="location"
        control={control}
        render={({ field, fieldState }) => {
          return (
            <label>
              <AsyncSelect
                {...field}
                value={value}
                placeholder={capitalize(style)}
                loadOptions={loadFilterOptions}
                components={{ MenuList }}
                className={styles[style]}
                onChange={option => {
                  handleChange(option, field);
                }}
                onInputChange={handleInputChange}
                menuIsOpen={
                  inputText?.length >= 3 && inputText !== value?.label
                }
                formatOptionLabel={option => (
                  <div className={styles['option']}>
                    {highlightText(option.label, inputText)}
                  </div>
                )}
                styles={{
                  ...searchSelectStyle,
                  control: (provided, state) => ({
                    ...provided,
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItem: 'center',
                    height: '48px',
                    borderRadius: '30px',
                    border: 'none',
                    boxShadow: state.isFocused
                      ? fieldState?.error && (inputText || value?.label)
                        ? '0 0 2px var(--icon-error-clr)'
                        : '0 0 2px var(--primary-clr)'
                      : 'none',
                    outline: 'none',
                  }),
                }}
              />
              {fieldState?.error && inputText && (
                <span className={styles['error-txt']}>
                  {fieldState?.error?.label?.message}
                </span>
              )}
            </label>
          );
        }}
      />
      <fieldset className={styles['btn-form-container']}>
        {isVisible && (
          <Button
            type="reset"
            style="clear-btn"
            handleClick={handleClearFilter}
          >
            <Icon name="cross-small" size={18} />
          </Button>
        )}
        <Button type="submit" style="search-btn">
          <Icon name="search" size={18} />
        </Button>
      </fieldset>
    </form>
  );
};

export default SearchSelect;
