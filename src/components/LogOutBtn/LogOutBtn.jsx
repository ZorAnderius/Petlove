import Button from '../Button/Button.jsx';

const LogOutBtn = ({ style }) => {
  const handleLogOut = () => {
    console.log('log out');
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
