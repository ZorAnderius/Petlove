import { v4 as uuid4 } from 'uuid';
import styles from './Rating.module.css';
import Icon from '../Icon/Icon.jsx';

const Rating = ({ rating, maxStars = 5 }) => {
  const stars = Array.from({ length: maxStars }, (_, i) => i + 1);

  return (
    <ul className={styles['rating-container']}>
      {stars?.map(star => {
        const fillPercentage =
          rating < maxStars
            ? Math.min(100, Math.max(0, (rating - (star - 1)) * 100))
            : 100;
        return (
          <li
            key={uuid4()}
            className={styles['star-container']}
            style={{ '--fill-rating': `${fillPercentage}%` }}
          >
            <Icon name="star" type="empty" size={16} />
            <Icon
              name="star"
              type="filled"
              styleWidth={`${fillPercentage}%`}
              size={16}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default Rating;
