import { components } from 'react-select';
import Icon from '../Icon/Icon.jsx';

const DropdownIndicator = state => {
  const { menuIsOpen } = state.selectProps;

  return (
    <components.DropdownIndicator {...state}>
      <div
        style={{
          width: '18px',
          height: '18px',
          marginRight: '6px',
          transform: menuIsOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          transition: 'transform 0.3s ease',
          color: 'var(--primary-txt-clr)',
        }}
      >
        <Icon name="chevron-down" size={18} />
      </div>
    </components.DropdownIndicator>
  );
};

export default DropdownIndicator;
