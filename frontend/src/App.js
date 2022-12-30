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
import QuestionEdit from './pages/Question/questionEdit';
import AnswerEdit from './pages/AnswerEdit';
import { useSelector } from 'react-redux';
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
  const [questions, setQuestions] = useState([]);
  const loginUserEmail = useSelector(state=>state.email);
  const fetchData = async () => {
    await axios
      .get(
        'http://ec2-3-36-23-23.ap-northeast-2.compute.amazonaws.com:8080/questions?page=1&size=10',
      )
      .then((res) => setQuestions(res.data.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home questions={questions} />} />
        <Route
          path="/questions"
          element={<Questions questions={questions} />}
        />
        <Route path="/users/login" element={<Login />} />
        <Route path="/users/signup" element={<Signup />} />
        <Route path="/users/logout" element={<Logout />} />
        <Route path="/questions/ask" element={<QuestionAsk />} />
        <Route
          path="/questions/:questionId"
          element={<QuestionDetail loginUserEmail={loginUserEmail}/>}
        />
        <Route path="/questions/edit/:questionId" element={<QuestionEdit />} />
        <Route path="/answeredit" element={<AnswerEdit loginUsername={localStorage.getItem('loginUsername')}/>} />
        <Route
          path="*"
          element={<div style={{ marginTop: '53px' }}>404</div>}
        />
      </Routes>
    </>
  );
}

export default App;
