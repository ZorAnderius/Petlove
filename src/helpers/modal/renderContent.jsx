import ModalNotice from '../../components/ModalNotice/ModalNotice.jsx';
import { modalContent } from '../constants/modalContent.js';

export const renderContent = (type, contentData) => {
  switch (type) {
    case modalContent.notice:
      return <ModalNotice {...contentData} />;
    case modalContent.attention:
      return <h1>Attention</h1>;
    case modalContent.approveAction:
      return <h1>Action Approval</h1>;
    case modalContent.editUser:
      return <h1>UserEdit</h1>;
    case modalContent.notification:
      return <h1>Notification</h1>;
    default:
      return null;
  }
};
