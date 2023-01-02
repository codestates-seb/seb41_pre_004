import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Mobile, Tablet, Desktop } from '../../components/Responsive';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import TextEditor from '../../components/EditMarkdown';
import EditSidebar from '../../components/EditSidebar';
import {
  ContainerWrapper,
  ContainerFlex,
  MobileContent,
  DesktopContent,
  ContentBlock,
  DetailSideBlock,
} from '../../styles/contentStyle';
import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

const QuestionEdit = () => {
  const questionId = useParams().questionId;
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const GetQuestion = async () => {
    await axios
      .get(
        `http://ec2-3-36-23-23.ap-northeast-2.compute.amazonaws.com:8080/questions/${questionId}`,
      )
      .then((res) => {
        return res.data.data;
      })
      .then((data) => {
        setTitle(data.title);
        setContent(data.content);
      });
  };

  useEffect(() => {
    GetQuestion();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleUpdate(e) {
    e.preventDefault();

    const token = localStorage.getItem('token');
    const parse = JSON.parse(token);

    const header = {
      headers: {
        'Content-Type': `application/json`,
        authorization: parse.authorization,
      },
    };

    let data = JSON.stringify({
      title: title,
      content: content,
    });

    axios
      .patch(
        `http://ec2-3-36-23-23.ap-northeast-2.compute.amazonaws.com:8080/questions/${questionId}`,
        data,
        header,
      )
      .catch((err) => {
        alert('권한이 없습니다.');
      });

    navigate(`/questions/${questionId}`);
    window.location.reload();
  }

  const handleUpdateTitle = (e) => {
    setTitle(e.target.value);
  };

  const checkUndefined = useCallback(() => {
    return title !== '' && content !== '';
  }, [title, content]);

  return (
    <>
      <ContainerWrapper>
        <ContainerFlex>
          <Navbar />
          <Mobile>
            <MobileContent>
              <ContentBlock>
                <form onSubmit={handleUpdate}>
                  <Title>
                    <TitleLabel>Title</TitleLabel>
                    <TitleInput value={title} onChange={handleUpdateTitle} />
                  </Title>
                  <Body>
                    <TitleLabel>Body</TitleLabel>
                    {checkUndefined() && (
                      <TextEditor content={content} setContent={setContent} />
                    )}
                  </Body>
                  <ButtonBlock>
                    <EditButton type="submit">Save edits</EditButton>
                    <CancleButton onClick={() => navigate(-1)}>
                      Cancle
                    </CancleButton>
                  </ButtonBlock>
                </form>
              </ContentBlock>
            </MobileContent>
          </Mobile>

          <Tablet>
            <MobileContent>
              <ContentBlock>
                <form onSubmit={handleUpdate}>
                  <Title>
                    <TabletLabel>Title</TabletLabel>
                    <TitleInput value={title} onChange={handleUpdateTitle} />
                  </Title>
                  <Body>
                    <TabletLabel>Body</TabletLabel>
                    {checkUndefined() && (
                      <TextEditor content={content} setContent={setContent} />
                    )}
                  </Body>
                  <ButtonBlock>
                    <EditButton type="submit">Save edits</EditButton>
                    <CancleButton onClick={() => navigate(-1)}>
                      Cancle
                    </CancleButton>
                  </ButtonBlock>
                </form>
              </ContentBlock>
            </MobileContent>
          </Tablet>

          <Desktop>
            <DesktopContent>
              <ContentBlock>
                <ContentSidebar>
                  <form onSubmit={handleUpdate}>
                    <Title>
                      <TabletLabel>Title</TabletLabel>
                      <TitleInput value={title} onChange={handleUpdateTitle} />
                    </Title>
                    <Body>
                      <TabletLabel>Body</TabletLabel>
                      {checkUndefined() && (
                        <TextEditor content={content} setContent={setContent} />
                      )}
                    </Body>
                    <ButtonBlock>
                      <EditButton type="submit">Save edits</EditButton>
                      <CancleButton onClick={() => navigate(-1)}>
                        Cancle
                      </CancleButton>
                    </ButtonBlock>
                  </form>
                  <DetailSideBlock>
                    <EditSidebar />
                  </DetailSideBlock>
                </ContentSidebar>
              </ContentBlock>
            </DesktopContent>
          </Desktop>
        </ContainerFlex>
      </ContainerWrapper>
      <Footer />
    </>
  );
};

const ContentSidebar = styled.div`
  display: flex;
`;

const CancleButton = styled.p`
  font-size: 13px;
  color: #0074cc;
  margin: 0 4px;
  padding: 10px;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background-color: #f0f9ff;
  }
`;

const EditButton = styled.button`
  margin: 0 4px;
  padding: 10px;
  font-size: 13px;
  color: #ffffff;
  background-color: #0a95ff;
  border-radius: 3px;

  &:hover {
    filter: brightness(95%);
  }
`;

const ButtonBlock = styled.div`
  display: flex;
  padding: 12px 0 16px 0;
`;

const Body = styled.div`
  margin-bottom: 8px;
`;

const TitleInput = styled.input`
  display: block;
  width: 100%;
  padding: 7px 9px;
  border: 1px solid #dddfe1;
  border-radius: 3px;
  color: #0c0d0e;
`;

const TitleLabel = styled.label`
  display: block;
  font-size: 13px;
  font-weight: 600;
  color: #0c0d0e;
  margin-bottom: 4px;
  padding: 0 2px;
`;

const TabletLabel = styled(TitleLabel)`
  font-size: 15px;
`;

const Title = styled.div`
  padding-bottom: 15px;
`;

export default QuestionEdit;
