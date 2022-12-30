import React from 'react';
import Homeitem from './HomeItem';

<<<<<<< HEAD
function HomeList({ homeData }) {
  return (
    <>
      {homeData.map((el) => {
        return <Homeitem question={el} key={el.questionId} />;
=======
function HomeList({ questions }) {
  return (
    <>
      {questions.map((question) => {
        return <Homeitem question={question} key={question.questionId} />;
>>>>>>> 3fc5466e3f833869c19ac071b2ff4aa8f5a6a16c
      })}
    </>
  );
}

export default HomeList;
