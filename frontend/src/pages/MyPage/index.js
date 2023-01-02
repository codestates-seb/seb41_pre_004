//전체 질문목록 랜더링
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import {
  ContainerWrapper,
  ContainerFlex,
  Content,
} from '../../styles/contentStyle';
import styled from 'styled-components';

function MyPage() {
  return (
    <>
      <ContainerWrapper>
        <ContainerFlex>
          <Navbar />
          <Content>
            <UserBlock>
              <UserInfo>
                <UserImage>
                  <img
                    src="https://www.gravatar.com/avatar/ed02bd6c00c0fb529136773bacdd072e?s=32&d=identicon&r=PG&f=1"
                    alt=""
                  />
                </UserImage>
                <UserName></UserName>
              </UserInfo>
            </UserBlock>
          </Content>
        </ContainerFlex>
      </ContainerWrapper>
      <Footer />
    </>
  );
}

const UserBlock = styled.div`
  width: 100%;
  min-height: 500px;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 24px;
  border-bottom: 1px solid #e4e6e8;
`;

const UserImage = styled.div`
  width: 96px;
  height: 96px;
  border-radius: 3px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
  }
`;

const UserName = styled.div`
  margin-left: 16px;

  h1 {
    font-size: 34px;
    font-weight: 400;
    color: #232629;
  }
`;

export default MyPage;
