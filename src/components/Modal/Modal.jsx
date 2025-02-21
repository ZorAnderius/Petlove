import ReactModal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContentStyle,
  selectIsModalOpen,
  selectModalContent,
} from '../../redux/modal/selector.js';
import { closeModal } from '../../redux/modal/slice.js';
import Button from '../Button/Button.jsx';
import Icon from '../Icon/Icon.jsx';
import styles from './Modal.module.css';
import clsx from 'clsx';

ReactModal.setAppElement('#root');

const Modal = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectIsModalOpen);
  const contentStyle = useSelector(selectContentStyle);
  const content = useSelector(selectModalContent);

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  if (!isOpen) return null;

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={handleCloseModal}
      shouldCloseOnOverlayClick
      shouldCloseOnEsc
      className={clsx(styles['modal'], contentStyle && styles[contentStyle])}
      overlayClassName={styles['overlay']}
    >
      <Button
        type="button"
        style="close-modal"
        handleClick={() => handleCloseModal()}
      >
        <Icon name="cross-small" size={24} />
      </Button>
      {content}
    </ReactModal>
  );
};

export default Modal;
