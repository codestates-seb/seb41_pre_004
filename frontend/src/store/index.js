import { createStore } from 'redux';

const initialstate = {
  email: '',
  menuOpen: false,
  navTab: 1,
};

const EmailReducer = (state = initialstate, action) => {
  switch (action.type) {
    case 'SETEMAIL':
      return {
        ...initialstate,
        email: action.value,
      };
    case 'TOGGLEMENU':
      return {
        ...initialstate,
        menuOpen: !action.value,
      };
    case 'SELECTTAB':
      return {
        ...initialstate,
        navTab: action.value,
      };
    default:
      return state;
  }
};

const store = createStore(EmailReducer);

export default store;
