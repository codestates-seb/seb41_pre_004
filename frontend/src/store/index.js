import { createStore } from 'redux';

const initialstate = {
  email: '',
  menuOpen: false,
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
    default:
      return state;
  }
};

const store = createStore(EmailReducer);

export default store;
