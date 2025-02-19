import { v4 as uuid4 } from 'uuid';
import { radioBtnNames } from '../../helpers/data/radioBtnNames.js';
import FilterRadio from '../FilterRadio/FilterRadio.jsx';
import styles from './RadioForm.module.css';

const RadioForm = ({ value, handleChangeValue }) => {
  const handleChange = e => {
    handleChangeValue(e.target.value);
  };

  const resetRadio = () => {
    handleChangeValue('');
  };

  return (
    <form className={styles['radio-form']} onChange={handleChange}>
      {radioBtnNames?.map(radioName => (
        <FilterRadio
          key={uuid4()}
          value={radioName}
          nameRadio="filterRadio"
          selected={value === radioName}
          resetRadio={resetRadio}
        />
      ))}
    </form>
  );
};

export default RadioForm;
