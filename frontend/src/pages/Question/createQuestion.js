//회원은 새로운 게시글을 작성할 수 있다. 게시글 작성

import React from 'react';
import styled from 'styled-components';
import TestEditorForm from '../../components/AskMarkdown';
import AskQuestionHeader from '../../components/AskQuestionHeader';
<<<<<<< HEAD
import AskSubmitBtn from '../../components/SubmitQuestionBtn';
=======
import Footer from '../../components/Footer';
import { ContainerWrapper, Container } from '../../styles/contentStyle';
>>>>>>> 39b2162fce6d886e7b8a49496dd33256f8dd61ad

const AskNotice = styled.div`
  width: 100%;
  max-width: 851px;
  background-color: #ecf5fb;
  margin-top: 16px;
  padding: 24px;
  border: 1px solid #a5ceed;
  border-radius: 3px;
  color: #3b4045;

  h2 {
    font-size: 21px;
    margin-bottom: 8px;
  }

  p {
    margin-bottom: 15px;
    font-size: 15px;
  }

  h5 {
    font-size: 15px;
    margin-bottom: 8px;
    font-weight: 700;
  }

  ol {
    margin-left: 30px;
  }

  li {
    font-size: 13px;
    margin-bottom: 4px;
    list-style: disc;
  }
`;

const AskTitle = styled.div`
  width: 100%;
  max-width: 851px;
  margin-top: 16px;
  padding: 24px;
  border: 1px solid #e4e6e8;
  border-radius: 3px;

  h2 {
    font-size: 15px;
    font-weight: 700;
    margin-bottom: 8px;
    color: #0c0d0e;
    padding: 0 2px;
  }

  p {
    margin: 2px 0;
    padding: 0 2px;
    font-size: 12px;
    color: #3b4045;
  }

  input {
    width: 100%;
    border: 1px solid #dddfe1;
    border-radius: 3px;
    padding: 7px 9px;
    margin: 2px 0;
  }
`;
const AskTags = styled.div`
  width: 100%;
  max-width: 851px;
  padding: 24px;
  border: 1px solid #e4e6e8;
  border-radius: 3px;

  h2 {
    font-size: 15px;
    font-weight: 700;
    margin-bottom: 8px;
    color: #0c0d0e;
    padding: 0 2px;
  }

  p {
    margin: 2px 0;
    padding: 0 2px;
    font-size: 12px;
    color: #3b4045;
  }

  input {
    width: 100%;
    border: 1px solid #dddfe1;
    border-radius: 3px;
    padding: 7px 9px;
    margin: 2px 0;
  }
`;

const LinkSpan = styled.span`
  color: #0173cc;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const AskContainer = styled(Container)`
  padding: 0 16px 24px 16px;
`;

function AskQuestionList() {
  return (
    <>
<<<<<<< HEAD
      <AskQuestionHeader></AskQuestionHeader>
      <AskNotice>
        <h2>Writing a good question</h2>
        <p>
          You’re ready to
          <a href="/">ask</a>a programming-related question and this form will
          help guide you through the process.
        </p>
        <p>
          Looking to ask a non-programming question? See the topics here to find
          a relevant site.
        </p>
        <h5>Steps</h5>
        <li>Summarize your problem in a one-line title.</li>
        <li>Describe your problem in more detail.</li>
        <li>Describe what you tried and what you expected to happen.</li>
        <li>
          Add “tags” which help surface your question to members of the
          community.
        </li>
        <li>Review your question and post it to the site.</li>
      </AskNotice>
      <AskTitle>
        <div>
          <h2>Title</h2>
          <p>
            Be specific and imagine you’re asking a question to another person.
          </p>
        </div>
        <input type={'text'}></input>
      </AskTitle>
      <TestEditorForm></TestEditorForm>
      <AskTags>
        <div>
          <h2>Tags</h2>
          <p>
            Add up to 5 tags describe what your question is about. Start typing
            to see suggestions.
          </p>
        </div>
        <input type={'text'} placeholder={'e.g (excel string regex)'}></input>
      </AskTags>
      <AskSubmitBtn></AskSubmitBtn>
=======
      <ContainerWrapper>
        <AskContainer>
          <AskQuestionHeader></AskQuestionHeader>
          <AskNotice>
            <h2>Writing a good question</h2>
            <p>
              You’re ready to <LinkSpan>ask</LinkSpan> a{' '}
              <LinkSpan>programming-related question</LinkSpan> and this form
              will help guide you through the process.
              <br />
              Looking to ask a non-programming question? See{' '}
              <LinkSpan>the topics here</LinkSpan> to find a relevant site.
            </p>
            <h5>Steps</h5>
            <ol>
              <li>Summarize your problem in a one-line title.</li>
              <li>Describe your problem in more detail.</li>
              <li>Describe what you tried and what you expected to happen.</li>
              <li>
                Add “tags” which help surface your question to members of the
                community.
              </li>
              <li>Review your question and post it to the site.</li>
            </ol>
          </AskNotice>
          <AskTitle>
            <div>
              <h2>Title</h2>
              <p>
                Be specific and imagine you’re asking a question to another
                person.
              </p>
            </div>
            <input
              type={'text'}
              placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
            ></input>
          </AskTitle>
          <TestEditorForm></TestEditorForm>
          <AskTags>
            <div>
              <h2>Tags</h2>
              <p>
                Add up to 5 tags describe what your question is about. Start
                typing to see suggestions.
              </p>
            </div>
            <input
              type={'text'}
              placeholder={'e.g (excel string regex)'}
            ></input>
          </AskTags>
        </AskContainer>
      </ContainerWrapper>
      <Footer />
>>>>>>> 39b2162fce6d886e7b8a49496dd33256f8dd61ad
    </>
  );
}

export default AskQuestionList;
