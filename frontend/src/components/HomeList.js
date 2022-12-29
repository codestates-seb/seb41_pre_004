import React from 'react';
import Homeitem from './HomeItem';

function HomeList({ homeData }) {
  return (
    <>
      {homeData.map((el) => {
        return <Homeitem question={el} key={el.id} />;
      })}
    </>
  );
}

export default HomeList;
