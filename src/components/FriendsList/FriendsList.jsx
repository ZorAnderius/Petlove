import { useEffect, useState } from 'react';
import { fetchFriends } from '../../api/fetchFriends.js';
import { useNavigate } from 'react-router-dom';
import styles from './FriendsList.module.css';
import FriendsItem from '../FriendsItem/FriendsItem.jsx';

const FriendsList = () => {
  const [friends, setFriends] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getFriends = async () => {
      try {
        const data = await fetchFriends();
        setFriends(data);
      } catch (error) {
        navigate(`/${error.name}`);
      }
    };
    getFriends();
  }, [setFriends, navigate]);

  return (
    friends?.length > 0 && (
      <ul className={styles['friends-list']}>
        {friends?.map(friend => {
          return (
            <li key={friend._id} className={styles['friends-item']}>
              <FriendsItem friend={friend} />
            </li>
          );
        })}
      </ul>
    )
  );
};

export default FriendsList;
