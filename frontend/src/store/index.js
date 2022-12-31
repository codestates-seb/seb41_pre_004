import { createStore } from 'redux';

const initialstate = {
  email: '',
  menuOpen: false,
  activeTab: 0,
};

const EmailReducer = (state = initialstate, action) => {
  switch (action.type) {
    case 'SETEMAIL':
      return {
        ...state,
        email: action.value,
      };
    case 'TOGGLEMENU':
      return {
        ...state,
        menuOpen: !action.value,
      };
    case 'ACTIVETAB':
      return {
        ...state,
        activeTab: action.value,
      };
    default:
      return state;
  }
};

const store = createStore(EmailReducer);

export default store;
