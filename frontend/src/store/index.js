import { createStore } from 'redux';

const initialstate = {
  useremail: '',
  menuOpen: false,
  activeTab: null,
};

const EmailReducer = (state = initialstate, action) => {
  switch (action.type) {
    case 'SETEMAIL':
      return {
        ...state,
        useremail: action.value,
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
