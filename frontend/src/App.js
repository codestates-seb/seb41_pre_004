import './App.css';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import AskQuestionHeader from './components/AskQuestionHeader';
import DetailHeader from './components/DetailHeader';
import QuestionList from './components/QuestionList';
import AskQuestionList from './pages/Question/createQuestion';
import AllQuestion from './pages/Question';
const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
  box-sizing: border-box;
  margin: 0;
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
  return (
    <>
      <GlobalStyle />
      {/* <QuestionList></QuestionList> */}
      <AllQuestion></AllQuestion>
      <div>dsfsdfsdfsfd</div>
      <div>dsfsdfsdfsfd</div>
      <div>dsfsdfsdfsfd</div>
      <div>dsfsdfsdfsfd</div>
      <div>dsfsdfsdfsfd</div>
      <div>dsfsdfsdfsfd</div>
      <div>dsfsdfsdfsfd</div>

      <AskQuestionList></AskQuestionList>
      <div>dsfsdfsdfsfd</div>
      <div>dsfsdfsdfsfd</div>
      <div>dsfsdfsdfsfd</div>
      <div>dsfsdfsdfsfd</div>
      <div>dsfsdfsdfsfd</div>
      <div>dsfsdfsdfsfd</div>
      <div>dsfsdfsdfsfd</div>
      <DetailHeader></DetailHeader>
    </>
  );
}

export default App;
