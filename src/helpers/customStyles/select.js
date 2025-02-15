export const customStyles = {
  control: (provided, state) => ({
    ...provided,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItem: 'center',
    height: '48px',
    borderRadius: '30px',
    border: 'none',
    boxShadow: state.isFocused ? '0 0 2px var(--primary-clr)' : 'none',
    outline: 'none',
  }),
  valueContainer: provided => ({
    ...provided,
    padding: '0px',
    paddingLeft: '14px',
  }),
  singleValue: (provided) => ({
    ...provided,
    margin: '0px',
    paddingBottom: '2px',
  }),
  indicatorSeparator: provided => ({
    ...provided,
    display: 'none',
  }),
  placeholder: provided => ({
    ...provided,
    color: 'var(--primary-txt-clr)',
  }),
  indicatorContainer: provided => ({
    ...provided,
    padding: '14px',
  }),
  menu: provided => ({
    ...provided,
    marginTop: '8px',
    borderRadius: '15px',
    overflow: 'hidden',
  }),
};
