import styled from 'styled-components';
import Navbar from '../components/Navbar';
import {
  ContainerWrapper,
  ContainerFlex,
  Content,
  ContentBlock,
} from '../styles/contentStyle';
import left from '../assets/icons/404-1.png';
import right from '../assets/icons/404-2.png';
import Footer from '../components/Footer';
import { Mobile, Tablet, Desktop } from '../components/Responsive';

const Error404 = () => {
  return (
    <>
      <ContainerWrapper>
        <ContainerFlex>
          <Navbar />
          <ContentError>
            <Mobile>
              <MobileBlock>
                <ContentLeft>
                  <img src={left} alt="" />
                </ContentLeft>
                <ContentRight>
                  <img src={right} alt="" />
                </ContentRight>
              </MobileBlock>
            </Mobile>

            <Tablet>
              <ErrorBlock>
                <ContentLeft>
                  <img src={left} alt="" />
                </ContentLeft>
                <ContentRight>
                  <img src={right} alt="" />
                </ContentRight>
              </ErrorBlock>
            </Tablet>

            <Desktop>
              <ErrorBlock>
                <ContentLeft>
                  <img src={left} alt="" />
                </ContentLeft>
                <ContentRight>
                  <img src={right} alt="" />
                </ContentRight>
              </ErrorBlock>
            </Desktop>
          </ContentError>
        </ContainerFlex>
      </ContainerWrapper>
      <Footer />
    </>
  );
};

const ErrorBlock = styled(ContentBlock)`
  display: flex;
  justify-content: center;
`;

const MobileBlock = styled(ErrorBlock)`
  flex-direction: column;
  align-items: center;
`;

const ContentError = styled(Content)`
  background-color: #f0f2f4;
  padding: 100px 0 100px 0;
`;

const ContentLeft = styled.div`
  max-width: 196px;
  height: 196px;

  img {
    width: 100%;
    height: 100%;
  }
`;

const ContentRight = styled.div`
  max-width: 480px;
  height: 221px;
  margin: 16px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export default Error404;
