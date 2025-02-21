import { useEffect } from 'react';
import Button from '../Button/Button.jsx';
import Icon from '../Icon/Icon.jsx';
import Title from '../Title/Title.jsx';
import styles from './ModalNotice.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getNoticeById } from '../../redux/notices/operation.js';
import { selectNotice } from '../../redux/notices/selector.js';
import { formattedDateWithSeparator } from '../../helpers/formatter/formatDate.js';
import { formatPrice } from '../../helpers/formatter/formatPrice.js';
import LinkBtn from '../LinkBtn/LinkBtn.jsx';
import Rating from '../Rating/Rating.jsx';

const ModalNotice = ({ id }) => {
  const dispatch = useDispatch();
  const notice = useSelector(selectNotice);

  useEffect(() => {
    dispatch(getNoticeById(id));
  }, [dispatch, id]);

  if (!notice) return null;

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
    user: { phone, email },
  } = notice;
  return (
    <div className={styles['notice-container']}>
      <div className={styles['img-category-container']}>
        <div className={styles['img-thumb']}>
          <img src={imgURL} alt={name} />
        </div>
        <span className={styles['notice-category']}>{category}</span>
      </div>
      <div className={styles['title-rating-container']}>
        <Title value={2} style="notice">
          {title}
        </Title>
        <div className={styles['']}>
          <Rating rating={4.2} />
          <p>{popularity}</p>
        </div>
      </div>
      <div className={styles['']}>
        <ul className={styles['']}>
          <li className={styles['']}>
            <p>Name</p>
            <p>{name}</p>
          </li>
          <li className={styles['']}>
            <p>Birthday</p>
            <p>{formattedDateWithSeparator(birthday, '.')}</p>
          </li>
          <li className={styles['']}>
            <p>Sex</p>
            <p>{sex}</p>
          </li>
          <li className={styles['']}>
            <p>Species</p>
            <p>{species}</p>
          </li>
        </ul>
        <p className={styles['']}>{comment}</p>
        <p className={styles['']}>{price ? formatPrice(price) : 'Free'}</p>
      </div>
      <div className={styles['']}>
        <Button type="button">
          <p>Add to</p>
          <Icon name="heart" size={18} />
        </Button>
        <LinkBtn
          direction={email ? `mailto:${email}` : `tel:${phone}`}
          type="notice-contact"
          newTab
        >
          Contact
        </LinkBtn>
      </div>
    </div>
  );
};

export default ModalNotice;
