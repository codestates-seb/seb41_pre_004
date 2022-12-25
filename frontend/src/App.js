import './App.css';
import {Link, Route, Routes} from 'react-router-dom';
import Login from './pages/Sign/Login';
import Signup from './pages/Sign/Signup'
import Logout from './pages/Sign/Logout'
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  /* ${reset} */

  * {
    box-sizing: border-box;
    /* margin: 0; */
  }

  /* a {
    color: initial;
    text-decoration: none;
  } */

  /* input,
  textarea {
    padding: 0;
    outline: none;
    border: 1px solid #000000;
    border-radius: 0;
    box-shadow: none;
  } */

  button {
    /* padding: 0;
    border: none;
    border-radius: 0;
    box-shadow: none;
    background-color: inherit; */
    cursor: pointer;
  }
`;

function App() {
//
  return(
  <>
  <GlobalStyle/>
  <div>
    <ul>
      <li><Link to='/login'>로그인</Link></li>
      <li><Link to='/logout'>로그아웃</Link></li>
      <li><Link to='/signup'>사인업</Link></li>
    </ul>
  </div>  
  <Routes>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/logout' element={<Logout/>}></Route>
    <Route path='/signup' element={<Signup/>}></Route>
  </Routes>

  </>
  )
}

export default App;
