import Button from '../Button/Button.jsx';
import Icon from '../Icon/Icon.jsx';

const EditUserBtn = ({ children, style }) => {
  return (
    <Button style={children ? style : 'edit-plain-btn'}>
      {children ? children : <Icon name="edit" size={18} />}
    </Button>
  );
};

export default EditUserBtn;
