import './App.css';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import Header from './components/Header';
import Container from './components/Container';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

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

const initialState = {
  login: true,
};

function App() {
  return (
    <>
      <GlobalStyle />
      <Header islogin={initialState.login} />
      <Container>
        <Navbar />
        <div style={{ width: '100%', padding: '24px', display: 'flex' }}>
          <div className="content" style={{ width: '100%' }}>
            <div style={{ height: '300px', backgroundColor: '#0066ff' }}></div>
            <div style={{ height: '300px', backgroundColor: '#0066ff' }}></div>
            <div style={{ height: '300px', backgroundColor: '#0066ff' }}></div>
            <div style={{ height: '300px', backgroundColor: '#0066ff' }}></div>
            <div style={{ height: '300px', backgroundColor: '#0066ff' }}></div>
            <div style={{ height: '300px', backgroundColor: '#0066ff' }}></div>
            <div style={{ height: '300px', backgroundColor: '#0066ff' }}></div>
          </div>
          <Sidebar />
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default App;
