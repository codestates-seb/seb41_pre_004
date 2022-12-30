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
<<<<<<< HEAD
=======
import QuestionEdit from './pages/Question/questionEdit';
>>>>>>> 3fc5466e3f833869c19ac071b2ff4aa8f5a6a16c

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
<<<<<<< HEAD
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  a,
  input,
  textarea,
  button {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
=======
>>>>>>> 3fc5466e3f833869c19ac071b2ff4aa8f5a6a16c
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
<<<<<<< HEAD
  const [homeData, setHomeData] = useState([]);
  const loginUsername = 'a';

  const fetchData = async () => {
    // const res = await axios.get('http://localhost:3005/question');
    const res = await axios.get('/questions?page=1&size=10');
    console.log(res.data.data);
    const data = await res.data.data;
    setHomeData(data);
=======
  const [questions, setQuestions] = useState([]);
  const loginUsername = 'a';

  const fetchData = async () => {
    await axios
      .get(
        'http://ec2-3-36-23-23.ap-northeast-2.compute.amazonaws.com:8080/questions?page=1&size=10',
      )
      .then((res) => setQuestions(res.data.data))
      .catch((error) => console.log(error));
>>>>>>> 3fc5466e3f833869c19ac071b2ff4aa8f5a6a16c
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <GlobalStyle />
      <Header />
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<Home homeData={homeData} />} />
        <Route path="/questions" element={<Questions homeData={homeData} />} />
=======
        <Route path="/" element={<Home questions={questions} />} />
        <Route
          path="/questions"
          element={<Questions questions={questions} />}
        />
>>>>>>> 3fc5466e3f833869c19ac071b2ff4aa8f5a6a16c
        <Route path="/users/login" element={<Login />} />
        <Route path="/users/signup" element={<Signup />} />
        <Route path="/users/logout" element={<Logout />} />
        <Route path="/questions/ask" element={<QuestionAsk />} />
        <Route
          path="/questions/:questionId"
          element={<QuestionDetail loginUsername={loginUsername} />}
        />
<<<<<<< HEAD
=======
        <Route path="/questions/edit/:questionId" element={<QuestionEdit />} />
        <Route
          path="*"
          element={<div style={{ marginTop: '53px' }}>404</div>}
        />
>>>>>>> 3fc5466e3f833869c19ac071b2ff4aa8f5a6a16c
      </Routes>
    </>
  );
}

export default App;
