import { createGlobalStyle } from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import reset from 'styled-reset';
import Header from './components/Header';
import Login from './pages/Sign/login';
import Signup from './pages/Sign/signup';
import Home from './pages/Question';
import Ask from './pages/Question/createQuestion';
import axios from 'axios';
import { useEffect, useState } from 'react';

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
    margin: 0;
    font-family: 'Noto Sans', sans-serif !important;
  }

  a {
    color: initial;
    text-decoration: none;
  }

  input,
  textarea {
    padding: 0;
    outline: none;
    border: 1px solid #000000;
    border-radius: 0;
    box-shadow: none;
  }

  button {
    padding: 0;
    border: none;
    border-radius: 0;
    box-shadow: none;
    background-color: inherit;
    cursor: pointer;
  }
`;

function App() {
  const [homeData, setHomeData] = useState([]);

  const fetchData = async () => {
    const res = await axios.get(`http://localhost:3005/question`);
    // const data = res;
    console.log(res.data);
    setHomeData(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home homeData={homeData} />} />
        <Route path="/questions" element={<Home />} />
        <Route path="/questions/ask" element={<Ask />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
