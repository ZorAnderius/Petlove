import SearchField from '../SearchField/SeachField.jsx';
import SelectField from '../SelectField/SelectField.jsx';
import styles from './NoticesFilters.module.css';
import {
  fetchCategory,
  fetchGender,
  fetchLocation,
  fetchType,
} from '../../api/fetchNoticeFilterValues.js';
import SearchSelect from '../SearchSelect/SearchSelect.jsx';
import RadioForm from '../RadioForm/RadioForm.jsx';
import Button from '../Button/Button.jsx';
import { useEffect, useState } from 'react';

const NoticesFilters = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [gender, setGender] = useState('');
  const [type, setType] = useState('');
  const [location, setLocation] = useState('');
  const [status, setStatus] = useState('');
  const [isResetVisible, setIsResetVisible] = useState(false);

  let resetTitleRef = null;

  const loadCategory = async () => await fetchCategory();

  const loadGender = async () => await fetchGender();

  const loadType = async () => await fetchType();

  const loadLocation = async value => await fetchLocation(value);

  const handleReset = () => {
    setTitle('');
    setCategory('');
    setGender('');
    setType('');
    setLocation('');
    setStatus('');
    if (resetTitleRef) {
      resetTitleRef();
    }
  };

  useEffect(() => {
    setIsResetVisible(
      !!(title || category || type || gender || location || status),
    );
  }, [title, category, type, gender, location, status]);

  return (
    <div className={styles['filter-container']}>
      <div className={styles['filter-list']}>
        <SearchField
          style="filter-notice"
          handleChangeValue={setTitle}
          setResetRef={resetFn => (resetTitleRef = resetFn)}
        />
        <SelectField
          style="category"
          label="category"
          loadOptions={loadCategory}
          value={category}
          handleChangeValue={setCategory}
        />
        <SelectField
          style="gender"
          label="by gender"
          loadOptions={loadGender}
          value={gender}
          handleChangeValue={setGender}
        />
        <SelectField
          style="type"
          label="by type"
          loadOptions={loadType}
          value={type}
          handleChangeValue={setType}
        />
        <SearchSelect
          style="location"
          loadOptions={loadLocation}
          value={location}
          handleChangeValue={setLocation}
        />
      </div>
      <div className={styles['separator']}></div>
      <div className={styles['radio-reset-container']}>
        <RadioForm value={status} handleChangeValue={setStatus} />
        {isResetVisible && (
          <Button type="button" style="reset" handleClick={handleReset}>
            Reset
          </Button>
        )}
      </div>
    </div>
  );
};

export default NoticesFilters;
