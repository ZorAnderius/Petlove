import { components } from 'react-select';
import ScrollBar from '../ScrollBar/ScrollBar.jsx';

const MenuList = props => {
  return (
    <components.MenuList {...props}>
      <ScrollBar>{props.children}</ScrollBar>
    </components.MenuList>
  );
};

export default MenuList;
