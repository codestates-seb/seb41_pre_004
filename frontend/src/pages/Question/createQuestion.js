import React, { useState } from 'react';
import styled from 'styled-components';
import TestEditorForm from '../../components/AskMarkdown';
import AskQuestionHeader from '../../components/AskQuestionHeader';
import Footer from '../../components/Footer';
import { ContainerWrapper, Container } from '../../styles/contentStyle';
import axios from 'axios';
<<<<<<< HEAD
import { useNavigate } from 'react-router-dom';
=======
import { json, useNavigate } from 'react-router-dom';
>>>>>>> 3fc5466e3f833869c19ac071b2ff4aa8f5a6a16c

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
const AskBtn = styled.div`
  button {
    background-color: #0a95ff;
    border: 1px solid transparent;
    border-radius: 3px;
    box-shadow: inset 0 1px 0 0 hsl(0deg 0% 100% / 40%);
    cursor: pointer;
    display: inline-block;
    font-size: 14px;
    font-weight: 400;
    margin-top: 8px;
    outline: none;
    padding: 0.8em;
    position: relative;
    text-align: center;
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
    color: white;
  }
`;

function AskQuestionList() {
  const [title, setTitle] = useState('');
  const [tags, setTags] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

<<<<<<< HEAD
    // axios.post(`http://localhost:3005/question`, {
    // axios.post(
    //   `http://ec2-3-36-23-23.ap-northeast-2.compute.amazonaws.com:8080/questions`,
    //   {
    //     title,
    // tags: tags.split(' '),
    //       content,
    //     },
    //   );

    const config = {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJyb2xlcyI6WyJVU0VSIl0sInVzZXJuYW1lIjoiY2hsd25zZ2hAbmF2ZXIuY29tIiwic3ViIjoiY2hsd25zZ2hAbmF2ZXIuY29tIiwiaWF0IjoxNjcyMzIzNjA1LCJleHAiOjE2NzIzMjcyMDV9.PCziSSf1LKzKxpZUx01KgMwpXnaQiAzUYiKWYAPonxgeBwV0_xRai-hOPcO7mA9FYwaAbMliMD6i37Gf4PfQyg`,
        //`Bearer ${token}`
      },
    };

    // const bodyParameters = {
    //   title,
    //   content,
    // };

    axios
      .post('/questions', { title, content }, config, { withCredentials: true })
      .then(console.log)
      .catch(console.log);
    navigate(`/`);
    window.location.reload();
=======
    const header = {
      headers: {
        'Content-Type': `application/json`,
        Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJyb2xlcyI6WyJVU0VSIl0sInVzZXJuYW1lIjoia2ltQGdtYWlsLmNvbSIsInN1YiI6ImtpbUBnbWFpbC5jb20iLCJpYXQiOjE2NzIzMzI4NjEsImV4cCI6MTY3MjMzNjQ2MX0.nY6EmpQ0FXfGjpKOzMFZ7wAd19b2q3rexM8k-hyOm8KpYZrEjDHClITO0hesp5zpHqXLQndleF4nRp0dAAx_tg`
      }
    };

    let data = JSON.stringify({
      title: title,
      content: content
    });

    axios
      .post(
        `http://ec2-3-36-23-23.ap-northeast-2.compute.amazonaws.com:8080/questions`,
        data,
        header
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    // navigate(`/`);
    // window.location.reload();
>>>>>>> 3fc5466e3f833869c19ac071b2ff4aa8f5a6a16c
  }

  const handleSetTitle = (event) => {
    let e = event.target.value;
    setTitle(e);
  };
  const handleSetTags = (event) => {
    let e = event.target.value;
    setTags(e);
  };

<<<<<<< HEAD
  // const [ques, setQues] = useState(null);

  // const fetchData = async () => {
  //   const response = await axios.get(`http://localhost:3001/title`);
  //   setQues(response.data);
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const title = e.target.title.value;
  //   const tags = e.target.tags.value;
  //   axios.post(`http://localhost:3001/title`, { title, tags });
  //   fetchData();
  // };

  // const headers = {
  //   'Content-Type': 'application/json',
  //   Authorization: apiKey,
  // };
  // const bodyParameters = {
  //   title,
  //   content,
  // };
  // const url =
  //   "'http://ec2-3-36-23-23.ap-northeast-2.compute.amazonaws.com:8080/questions'";

  // axios.post(url, { headers }, bodyParameters);

  //
=======
>>>>>>> 3fc5466e3f833869c19ac071b2ff4aa8f5a6a16c
  return (
    <>
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
          <form onSubmit={handleSubmit}>
            <AskTitle>
              <div>
                <h2>Title</h2>
                <p>
                  Be specific and imagine you’re asking a question to another
                  person.
                </p>
              </div>
              <input
                value={title}
                onChange={handleSetTitle}
                type={'text'}
                placeholder={'e.g (excel string regex)'}
              ></input>
            </AskTitle>
            <TestEditorForm setContent={setContent} />
            <AskTags>
              <div>
                <h2>Tags</h2>
                <p>
                  Add up to 5 tags describe what your question is about. Start
                  typing to see suggestions.
                </p>
              </div>
              <input
                value={tags}
                onChange={handleSetTags}
                type={'text'}
                placeholder={'e.g (excel string regex)'}
              ></input>
            </AskTags>
            <AskBtn>
              <button type="submit">Review your question</button>
            </AskBtn>
          </form>
        </AskContainer>
      </ContainerWrapper>
      <Footer />
    </>
  );
}

export default AskQuestionList;
