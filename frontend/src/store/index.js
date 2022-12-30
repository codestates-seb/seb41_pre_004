import { createStore } from 'redux';

const initialstate = {
  email: '',
};


const EmailReducer = (state = initialstate, action) =>{

  if(action.type === 'SETEMAIL'){
    return {
      email: action.value,
    }
  }
  return state;
}

const store = createStore(EmailReducer)

export default store;