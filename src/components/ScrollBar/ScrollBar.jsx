import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import styles from './ScrollBar.module.css';

const menuHeaderStyle = {
  maxHeight: '216px',
};

const ScrollBar = ({ children }) => {
  return (
    <PerfectScrollbar
      style={menuHeaderStyle}
      className={styles['perfect-scrollbar']}
    >
      {children}
    </PerfectScrollbar>
  );
};

export default ScrollBar;
