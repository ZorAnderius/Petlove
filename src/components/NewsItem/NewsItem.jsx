import { formatted_date } from '../../helpers/formatter/formatDate.js';
import LinkBtn from '../LinkBtn/LinkBtn.jsx';
import Title from '../Title/Title.jsx';
import styles from './NewsItem.module.css';

const NewsItem = ({ newItem = {} }) => {
  console.log(newItem);
  const { title, imgUrl, text, date, url } = newItem;
  return (
    <>
      <div className={styles['img-thumb']}>
        <img src={imgUrl} alt={title} />
      </div>
      <div className={styles['news-item-txt-wrap']}>
        <Title value={2} style="news-item">
          {title}
        </Title>
        <p className={styles['news-item-txt']}>{text}</p>
      </div>
      <div className={styles['news-item-add-info']}>
        <p className={styles['news-item-date']}>{formatted_date(date)}</p>
        <LinkBtn direction={url} newTab type="news-item-link">
          Read more
        </LinkBtn>
      </div>
    </>
  );
};

export default NewsItem;
