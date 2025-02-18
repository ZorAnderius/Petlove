import { v4 as uuid4 } from 'uuid';
import { radioBtnNames } from '../../helpers/data/radioBtnNames.js';
import FilterRadio from '../FilterRadio/FilterRadio.jsx';
import styles from './RadioForm.module.css';
import { useState } from 'react';

const RadioForm = () => {
  const [selected, setSelected] = useState('');

  const handleChange = e => {
    setSelected(e.target.value);
  };

  const resetRadio = () => {
    setSelected('');
  };

  return (
    <form className={styles['radio-form']} onChange={handleChange}>
      {radioBtnNames?.map(radioName => (
        <FilterRadio
          key={uuid4()}
          value={radioName}
          nameRadio="filterRadio"
          selected={selected === radioName}
          resetRadio={resetRadio}
        />
      ))}
    </form>
  );
};

export default RadioForm;
