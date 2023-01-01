import { createStore } from 'redux';

const initialstate = {
  username: '',
  menuOpen: false,
  activeTab: null,
};

const EmailReducer = (state = initialstate, action) => {
  switch (action.type) {
    case 'SETEMAIL':
      return {
        ...state,
        username: action.value,
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
