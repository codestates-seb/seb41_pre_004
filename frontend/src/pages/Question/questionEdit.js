import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Mobile, Tablet, Desktop } from '../../components/Responsive';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import TextEditor from '../../components/EditMarkdown';
import {
  ContainerWrapper,
  ContainerFlex,
  MobileContent,
  DesktopContent,
  ContentBlock,
  DetailSideBlock,
} from '../../styles/contentStyle';
import { useState } from 'react';
import axios from 'axios';

const QuestionEdit = () => {
  const question = useLocation().state;

  const [title, setTitle] = useState('');
  const [tags, setTags] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    axios.put(`/questions`, {
      title,
      tags: tags.split(' '),
      content,
    });

    navigate(`/`);
    window.location.reload();
  }
  const handleSetTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleSetTags = (e) => {
    setTags(e.target.value);
  };

  return (
    <>
      <ContainerWrapper>
        <ContainerFlex>
          <Navbar />
          <Mobile>
            <MobileContent>
              <ContentBlock>
                <form onSubmit={handleSubmit}>
                  <Title>
                    <TitleLabel>Title</TitleLabel>
                    <TitleInput
                      value={question.title}
                      onChange={handleSetTitle}
                    />
                  </Title>
                  <Body>
                    <TitleLabel>Body</TitleLabel>
                    <TextEditor
                      content={question.content}
                      setContent={setContent}
                    />
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
              <ContentBlock></ContentBlock>
            </MobileContent>
          </Tablet>

          <Desktop>
            <DesktopContent>
              <ContentBlock></ContentBlock>
            </DesktopContent>
          </Desktop>
        </ContainerFlex>
      </ContainerWrapper>
      <Footer />
    </>
  );
};

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

const Title = styled.div`
  padding-bottom: 15px;
`;

export default QuestionEdit;
