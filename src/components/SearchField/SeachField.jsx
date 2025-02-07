import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import Input from '../Input/Input.jsx';
import Button from '../Button/Button.jsx';
import Icon from '../Icon/Icon.jsx';
import styles from './SearchField.module.css';

const SearchField = ({ action }) => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const handleSubmitSearch = data => {
    const validData = data?.search?.trim();
    if (validData) dispatch(action(validData));
  };
  return (
    <form className={styles} onSubmit={handleSubmit(handleSubmitSearch)}>
      <Input type="text" label="search" register={register} />
      <Button type="submit">
        <Icon name="search" size={18} />
      </Button>
    </form>
  );
};

export default SearchField;
