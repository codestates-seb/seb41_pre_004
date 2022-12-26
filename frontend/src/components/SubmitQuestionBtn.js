import React from 'react';
import styled from 'styled-components';

const SubmitBtn = styled.button`
  background-color: #0a95ff;
  border: 1px solid transparent;
  border-radius: 3px;
  box-shadow: inset 0 1px 0 0 hsl(0deg 0% 100% / 40%);
  color: #fff;
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
`;

function AskSubmitBtn() {
  return (
    <>
      <SubmitBtn> Review your question</SubmitBtn>
    </>
  );
}

export default AskSubmitBtn;
