import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import arrowUpIcon from '../assets/icons/arrowUpIcon.png';
import arrowDownIcon from '../assets/icons/arrowDownIcon.png';
import { Mobile, Tablet, Desktop } from '../components/Responsive';
import QuestionDetailUser from '../components/QuestionDetailUser';

const AnswerItem = ({ loginUsername, answer }) => {
  const question = useLocation().state;

  return (
    <>
      <AnswerContainer>
        <Mobile>
          <TabletBlock>
            <PostLeft>
              <VoteButton>
                <img src={arrowUpIcon} alt="Vote Up" />
              </VoteButton>
              <VoteCount>0</VoteCount>
              <VoteButton>
                <img src={arrowDownIcon} alt="Vote Down" />
              </VoteButton>
            </PostLeft>
            <AnswerRight>
              <PostText
                dangerouslySetInnerHTML={{ __html: question.content }}
              />
              <QuestionUser>
                <QuestionDetailUser
                  question={question}
                  loginUsername={loginUsername}
                />
              </QuestionUser>
            </AnswerRight>
          </TabletBlock>
        </Mobile>

        <Tablet>
          <TabletBlock>
            <PostLeft>
              <VoteButton>
                <img src={arrowUpIcon} alt="Vote Up" />
              </VoteButton>
              <VoteCount>0</VoteCount>
              <VoteButton>
                <img src={arrowDownIcon} alt="Vote Down" />
              </VoteButton>
            </PostLeft>
            <AnswerRight>
              <PostText
                dangerouslySetInnerHTML={{ __html: question.content }}
              />
              <QuestionUser>
                <QuestionDetailUser
                  question={question}
                  loginUsername={loginUsername}
                />
              </QuestionUser>
            </AnswerRight>
          </TabletBlock>
        </Tablet>

        <Desktop>
          <AnswerBlock>
            <PostLeft>
              <VoteButton>
                <img src={arrowUpIcon} alt="Vote Up" />
              </VoteButton>
              <VoteCount>0</VoteCount>
              <VoteButton>
                <img src={arrowDownIcon} alt="Vote Down" />
              </VoteButton>
            </PostLeft>
            <AnswerRight>
              <PostText
                dangerouslySetInnerHTML={{ __html: question.content }}
              />
              <QuestionUser>
                <QuestionDetailUser
                  question={question}
                  loginUsername={loginUsername}
                />
              </QuestionUser>
            </AnswerRight>
          </AnswerBlock>
        </Desktop>
      </AnswerContainer>
    </>
  );
};

const AnswerContainer = styled.div`
  display: flex;
`;

const AnswerBlock = styled.div`
  width: 100%;
  display: flex;
  padding: 16px 16px 0 0;
  border-bottom: 1px solid #e4e6e8;
`;

const TabletBlock = styled(AnswerBlock)`
  padding: 16px 0 0 0;
`;

const AnswerRight = styled.div`
  flex-grow: 1;
`;

const QuestionUser = styled.div`
  margin: 16px 0;
`;

const PostText = styled.p`
  width: 100%;
  min-height: 100px;
  word-break: break-all;
  font-size: 15px;
  color: #232629;
`;

const VoteCount = styled.p`
  margin: 2px;
  font-size: 20px;
  color: #6a737c;
  text-align: center;
`;

const VoteButton = styled.button`
  margin: 2px;
`;

const PostLeft = styled.div`
  padding-right: 16px;
`;

export default AnswerItem;
