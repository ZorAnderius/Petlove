import { useDispatch } from 'react-redux';
import Button from '../Button/Button.jsx';
import { logOut } from '../../redux/auth/operation.js';

const LogOutBtn = ({ style }) => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
  };
  return (
    <Button
      style={style ? `${style}-logout` : 'logout'}
      handleClick={handleLogOut}
    >
      Log Out
    </Button>
  );
};

export default LogOutBtn;
