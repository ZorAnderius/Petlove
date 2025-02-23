import { useDispatch } from 'react-redux';
import { ROUTES } from '../../helpers/constants/ROUTES.js';
import LinkBtn from '../LinkBtn/LinkBtn.jsx';
import Title from '../Title/Title.jsx';
import styles from './ModalAttention.module.css';
import { closeModal } from '../../redux/modal/slice.js';

const ModalAttention = () => {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closeModal());
  };
  return (
    <div className={styles['attention-container']}>
      <div className={styles['img-thumb']}>
        <div className={styles['img-pet-avatar']}></div>
      </div>
      <Title value={2} style="attention">
        Attention
      </Title>
      <p className={styles['attention-txt']}>
        We would like to remind you that certain functionality is available only
        to authorized users.If you have an account, please log in with your
        credentials. If you do not already have an account, you must register to
        access these features
      </p>
      <div className={styles['btn-container']}>
        <LinkBtn direction={ROUTES.LOGIN} type="login-attention" handleClick={handleClose}>
          Log In
        </LinkBtn>
        <LinkBtn direction={ROUTES.REGISTER} type="register" handleClick={handleClose}>
          Registration
        </LinkBtn>
      </div>
    </div>
  );
};

export default ModalAttention;
