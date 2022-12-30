import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { createGlobalStyle } from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import reset from 'styled-reset';
import Header from './components/Header';
import Login from './pages/Sign/login';
import Logout from './pages/Sign/logout';
import Signup from './pages/Sign/signup';
import Home from './pages';
import Questions from './pages/Question';
import QuestionAsk from './pages/Question/createQuestion';
import QuestionDetail from './pages/Question/questionDetail';

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
    margin: 0;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  a,
  input,
  textarea,
  button {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  a,
  input,
  textarea,
  button {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
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
  const loginUsername = 'a';

  const fetchData = async () => {
    // const res = await axios.get('http://localhost:3005/question');
    const res = await axios.get('/questions?page=1&size=10');
    console.log(res.data.data);
    const data = await res.data.data;
    setHomeData(data);
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
        <Route path="/questions" element={<Questions homeData={homeData} />} />
        <Route path="/users/login" element={<Login />} />
        <Route path="/users/signup" element={<Signup />} />
        <Route path="/users/logout" element={<Logout />} />
        <Route path="/questions/ask" element={<QuestionAsk />} />
        <Route
          path="/questions/:questionId"
          element={<QuestionDetail loginUsername={loginUsername} />}
        />
      </Routes>
    </>
  );
}

export default App;
