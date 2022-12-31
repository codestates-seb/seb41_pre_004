import styled from 'styled-components';
import { Mobile, Tablet, Desktop } from './Responsive';
import handshakeIcon from '../assets/icons/handshakeIcon.svg';
import { Link } from 'react-router-dom';

const QuestionDetailUser = ({ question, loginUserEmail }) => {
  return (
    <>
      {true ? (
        <LoginBlock>
          <ButtonBlock>
            <Mobile>
              <Link
                to={`/questions/edit/${question.questionId}`}
                state={question}
              >
                <DetailButton>Edit</DetailButton>
              </Link>
              <DetailButton>Delete</DetailButton>
            </Mobile>

            <Tablet>
              <Link
                to={`/questions/edit/${question.questionId}`}
                state={question}
              >
                <TabletDetailButton>Edit</TabletDetailButton>
              </Link>
              <TabletDetailButton>Delete</TabletDetailButton>
            </Tablet>

            <Desktop>
              <Link
                to={`/questions/edit/${question.questionId}`}
                state={question}
              >
                <TabletDetailButton>Edit</TabletDetailButton>
              </Link>
              <TabletDetailButton>Delete</TabletDetailButton>
            </Desktop>
          </ButtonBlock>
          <UserBlock>
            <EditBlock>
              <EditText>edited 1 mins ago</EditText>
            </EditBlock>
            <AskBlock>
              <AskUpBlock>
                <AskText>asked 1 mins ago</AskText>
                <User>
                  <UserImage>
                    <img
                      src="https://www.gravatar.com/avatar/ed02bd6c00c0fb529136773bacdd072e?s=32&d=identicon&r=PG&f=1"
                      alt="User"
                    />
                  </UserImage>
                  <UserWrapper>
                    <Username>{question.author}</Username>
                  </UserWrapper>
                </User>
              </AskUpBlock>
              <AskDownBlock>
                <img src={handshakeIcon} alt="" />
                <EtcSpan>New contributor</EtcSpan>
              </AskDownBlock>
            </AskBlock>
          </UserBlock>
        </LoginBlock>
      ) : (
        <LogoutBlock>
          <UserBlock>
            <EditBlock>
              <EditText>edited 1 mins ago</EditText>
            </EditBlock>
            <AskBlock>
              <AskUpBlock>
                <AskText>asked 1 mins ago</AskText>
                <User>
                  <UserImage>
                    <img
                      src="https://www.gravatar.com/avatar/ed02bd6c00c0fb529136773bacdd072e?s=32&d=identicon&r=PG&f=1"
                      alt="User"
                    />
                  </UserImage>
                  <UserWrapper>
                    <Username>{question.author}</Username>
                  </UserWrapper>
                </User>
              </AskUpBlock>
              <AskDownBlock>
                <img src={handshakeIcon} alt="" />
                <EtcSpan>New contributor</EtcSpan>
              </AskDownBlock>
            </AskBlock>
          </UserBlock>
        </LogoutBlock>
      )}
    </>
  );
};

const EtcSpan = styled.span`
  font-size: 11px;
  color: #3b4045;
  margin-left: 4px;
`;

const User = styled.div`
  display: flex;
`;

const Username = styled.span`
  font-size: 11px;
  color: #0074cc;
`;

const UserWrapper = styled.div`
  margin-left: 8px;
`;

const UserImage = styled.div`
  img {
    width: 32px;
    height: 32px;
    border-radius: 3px;
  }
`;

const AskDownBlock = styled.div`
  display: flex;
  align-items: center;
  background-color: #d0e2f0;
  padding: 6px 8px;
`;

const AskUpBlock = styled.div`
  background-color: #d8eaf8;
  padding: 5px 6px 7px 7px;
`;

const AskBlock = styled.div`
  overflow: hidden;
  border-radius: 3px;
`;

const EditText = styled.p`
  margin-bottom: 4px;
  font-size: 12px;
  color: #0074cc;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const AskText = styled(EditText)`
  color: #6a737c;
  cursor: auto;

  &:hover {
    opacity: 1;
  }
`;

const EditBlock = styled.div`
  margin: 4px 0;
  padding: 5px 6px 7px 7px;
`;

const UserBlock = styled.div`
  flex-grow: 1;
  width: 100%;
  max-width: 200px;
`;

const DetailButton = styled.button`
  margin: 4px;
  font-size: 11px;
  color: #6a737c;

  &:hover {
    opacity: 0.8;
  }
`;

const TabletDetailButton = styled(DetailButton)`
  font-size: 13px;
`;

const ButtonBlock = styled.div``;

const LoginBlock = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LogoutBlock = styled.div`
  display: flex;
  justify-content: end;
`;

export default QuestionDetailUser;
