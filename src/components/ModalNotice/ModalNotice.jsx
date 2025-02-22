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
        <Title value={2} style="notice-modal">
          {title}
        </Title>
        <div className={styles['rating-container']}>
          <Rating rating={popularity} />
          <p>{popularity}</p>
        </div>
      </div>
      <div className={styles['pet-info-container']}>
        <ul className={styles['pet-info-list']}>
          <li className={styles['pet-info-item']}>
            <p>Name</p>
            <p>{name}</p>
          </li>
          <li className={styles['pet-info-item']}>
            <p>Birthday</p>
            <p>{formattedDateWithSeparator(birthday, '.')}</p>
          </li>
          <li className={styles['pet-info-item']}>
            <p>Sex</p>
            <p>{sex}</p>
          </li>
          <li className={styles['pet-info-item']}>
            <p>Species</p>
            <p>{species}</p>
          </li>
        </ul>
        <p className={styles['pet-comment']}>{comment}</p>
        <p className={styles['pet-price']}>{price ? formatPrice(price) : 'Free'}</p>
      </div>
      <div className={styles['modal-btn-container']}>
        <Button type="button" style='favorite-btn'>
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
