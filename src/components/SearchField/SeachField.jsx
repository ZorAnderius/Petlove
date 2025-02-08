import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import Input from '../Input/Input.jsx';
import Button from '../Button/Button.jsx';
import Icon from '../Icon/Icon.jsx';
import styles from './SearchField.module.css';

const SearchField = ({ action }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const handleSubmitSearch = data => {
    const validData = data?.search?.trim();
    if (validData) dispatch(action(validData));
  };

  const handleClearFilter = () => {
    dispatch(action(''));
    setTimeout(() => setIsVisible(false), 0);
  };

  const handleChange = e => {
    e?.target?.value?.trim() ? setIsVisible(true) : setIsVisible(false);
  };

  return (
    <form
      className={styles['search-form']}
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
