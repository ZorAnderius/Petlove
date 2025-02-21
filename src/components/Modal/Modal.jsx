import ReactModal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { selectModal } from '../../redux/modal/selector.js';
import { closeModal } from '../../redux/modal/slice.js';
import Button from '../Button/Button.jsx';
import Icon from '../Icon/Icon.jsx';
import styles from './Modal.module.css';
import clsx from 'clsx';
import { renderContent } from '../../helpers/modal/renderContent.jsx';

ReactModal.setAppElement('#root');

const Modal = () => {
  const dispatch = useDispatch();
  const { isModalOpen, type, contentData } = useSelector(selectModal);

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  if (!isModalOpen) return null;

  return (
    <ReactModal
      isOpen={isModalOpen}
      onRequestClose={handleCloseModal}
      shouldCloseOnOverlayClick
      shouldCloseOnEsc
      className={clsx(styles['modal'], type && styles[type])}
      overlayClassName={styles['overlay']}
      closeTimeoutMS={300}
    >
      <Button
        type="button"
        style="close-modal"
        handleClick={() => handleCloseModal()}
      >
        <Icon name="cross-small" size={24} />
      </Button>
      {renderContent(type, contentData)}
    </ReactModal>
  );
};

export default Modal;
