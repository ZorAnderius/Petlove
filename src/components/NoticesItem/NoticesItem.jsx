import { useDispatch } from 'react-redux';
import { formattedDateWithSeparator } from '../../helpers/formatter/formatDate.js';
import { formatPrice } from '../../helpers/formatter/formatPrice.js';
import Button from '../Button/Button.jsx';
import Icon from '../Icon/Icon.jsx';
import Title from '../Title/Title.jsx';
import styles from './NoticesItem.module.css';
import { openModal } from '../../redux/modal/slice.js';

const NoticesItem = ({ notice }) => {
  const dispatch = useDispatch();
  console.log(notice._id);

  const handleOpenModal = () => {
    dispatch(
      openModal({
        contentData: { id: notice._id },
        type: 'notice',
      }),
    );
  };
  const {
    species,
    category,
    price = 0,
    title,
    name,
    birthday,
    comment,
    sex,
    imgURL,
    popularity,
  } = notice;
  return (
    <>
      <div className={styles['img-thumb']}>
        <img src={imgURL} alt={name} />
      </div>
      <div className={styles['txt-info-container']}>
        <div className={styles['title-rating-wrap']}>
          <Title value={2} style="notice">
            {title}
          </Title>
          <div className={styles['rating-container']}>
            <Icon name="star" type='notice' size={16} />
            <p>{popularity}</p>
          </div>
        </div>
        <ul className={styles['pet-info-list']}>
          <li className={styles['pet-info-item']}>
            <p>Name</p>
            <p className={styles['pet-info-data']}>{name}</p>
          </li>
          <li className={styles['pet-info-item']}>
            <p>Birthday</p>
            <p className={styles['pet-info-data']}>
              {formattedDateWithSeparator(birthday, '.')}
            </p>
          </li>
          <li className={styles['pet-info-item']}>
            <p>Sex</p>
            <p className={styles['pet-info-data']}>{sex}</p>
          </li>
          <li className={styles['pet-info-item']}>
            <p>Species</p>
            <p className={styles['pet-info-data']}>{species}</p>
          </li>
          <li className={styles['pet-info-item']}>
            <p>Category</p>
            <p className={styles['pet-info-data']}>{category}</p>
          </li>
        </ul>
        <p className={styles['pet-description']}>{comment}</p>
      </div>
      <div className={styles['price-btn-nav-wrap']}>
        <p className={styles['pet-price']}>
          {price === 0 ? 'Free' : formatPrice(price)}
        </p>
        <div className={styles['pet-btn-container']}>
          <Button
            type="button"
            style="notice-learn-more"
            handleClick={() => handleOpenModal()}
          >
            Learn more
          </Button>
          <Button type="button" style="notice-favorite">
            <Icon name="heart" size={18} />
          </Button>
        </div>
      </div>
    </>
  );
};

export default NoticesItem;
