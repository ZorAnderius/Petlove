import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useCallback, useEffect, useState } from 'react';
import Input from '../Input/Input.jsx';
import Button from '../Button/Button.jsx';
import Icon from '../Icon/Icon.jsx';
import styles from './SearchField.module.css';
import clsx from 'clsx';

const SearchField = ({ action, style, handleChangeValue, setResetRef }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();

  const handleSubmitSearch = data => {
    const validData = data?.search?.trim();
    if (validData)
      action ? dispatch(action(validData)) : handleChangeValue(validData);
  };

  const handleClearFilter = useCallback(() => {
    action ? dispatch(action('')) : handleChangeValue('');
    setTimeout(() => setIsVisible(false), 0);
    reset();
  }, [handleChangeValue, dispatch, action, reset]);

  useEffect(() => {
    setResetRef && setResetRef(handleClearFilter);
  }, [setResetRef, handleClearFilter]);

  const handleChange = e => {
    e?.target?.value?.trim() ? setIsVisible(true) : setIsVisible(false);
  };

  return (
    <form
      className={clsx(styles['search-form'], style && styles[style])}
      onSubmit={handleSubmit(handleSubmitSearch)}
      onChange={handleChange}
    >
      <Input
        type="text"
        label="search"
        style="search-input"
        register={register}
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

export default SearchField;
