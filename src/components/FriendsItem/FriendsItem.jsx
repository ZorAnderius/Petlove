import { formatWorkingDay } from '../../helpers/formatter/formatWorkingDay.js';
import Title from '../Title/Title.jsx';
import styles from './FriendsItem.module.css';
import LinkBtn from '../LinkBtn/LinkBtn.jsx';
import { formatPhoneNumber } from '../../helpers/formatter/formatPhoneNumber.js';

const FriendsItem = ({ friend }) => {
  const { address, email, imageUrl, phone, title, workDays, url } = friend;
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    address,
  )}`;
  return (
    <>
      <div className={styles['friend-thumb']}>
        <img src={imageUrl} alt={title} />
      </div>
      <div className={styles['friends-info-container']}>
        <div className={styles['title-wrap']}>
          <p className={styles['work-time']}>{formatWorkingDay(workDays)}</p>
          <Title value={2} style="friends">
            {title}
          </Title>
        </div>
        <ul className={styles['friends-info-list']}>
          <li className={styles['info-item']}>
            <p>
              Email:
              {email ? (
                <LinkBtn
                  type="friends-info-link"
                  direction={`mailto:${email}`}
                  newTab
                >
                  {email}
                </LinkBtn>
              ) : (
                <LinkBtn type="friends-info-link" direction={url} newTab>
                  website only
                </LinkBtn>
              )}
            </p>
          </li>
          <li className={styles['info-item']}>
            <p>
              Address:
              {address ? (
                <LinkBtn
                  type="friends-info-link"
                  direction={googleMapsUrl}
                  newTab
                >
                  {address}
                </LinkBtn>
              ) : (
                <LinkBtn type="friends-info-link" direction={url} newTab>
                  website only
                </LinkBtn>
              )}
            </p>
          </li>
          <li className={styles['info-item']}>
            <p>
              Phone:
              {phone ? (
                <LinkBtn type="friends-info-link" direction={`tel:${phone}`}>
                  {formatPhoneNumber(phone)}
                </LinkBtn>
              ) : email ? (
                <LinkBtn
                  type="friends-info-link"
                  direction={`mailto:${email}`}
                  newTab
                >
                  email only
                </LinkBtn>
              ) : (
                <LinkBtn type="friends-info-link" direction={url} newTab>
                  website only
                </LinkBtn>
              )}
            </p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default FriendsItem;
