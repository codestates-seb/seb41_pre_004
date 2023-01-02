import styled from 'styled-components';
import arrowUpIcon from '../assets/icons/arrowUpIcon.png';
import arrowDownIcon from '../assets/icons/arrowDownIcon.png';
import { Mobile, Tablet, Desktop } from '../components/Responsive';
import AnswerDetailUser from '../components/AnswerDetailUser';

const AnswerItem = ({ answer }) => {
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
              <PostText dangerouslySetInnerHTML={{ __html: answer.content }} />
              <QuestionUser>
                <AnswerDetailUser answer={answer} />
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
              <PostText dangerouslySetInnerHTML={{ __html: answer.content }} />
              <QuestionUser>
                <AnswerDetailUser answer={answer} />
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
              <PostText dangerouslySetInnerHTML={{ __html: answer.content }} />
              <QuestionUser>
                <AnswerDetailUser answer={answer} />
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
  border-top: 1px solid #e4e6e8;
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
  padding-top: 10px;
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
