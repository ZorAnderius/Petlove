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

const NoticesFilters = () => {
  const loadCategory = async () => await fetchCategory();

  const loadGender = async () => await fetchGender();

  const loadType = async () => await fetchType();

  const loadLocation = async value => await fetchLocation(value);

  return (
    <div className={styles['filter-container']}>
      <div className={styles['filter-list']}>
        <SearchField style="filter-notice" />
        <SelectField
          style="category"
          label="category"
          loadOptions={loadCategory}
        />
        <SelectField
          style="gender"
          label="by gender"
          loadOptions={loadGender}
        />
        <SelectField style="type" label="by type" loadOptions={loadType} />
        <SearchSelect style="location" loadOptions={loadLocation} />
      </div>
      <div className={styles['separator']}></div>
      <RadioForm />
    </div>
  );
};

export default NoticesFilters;
