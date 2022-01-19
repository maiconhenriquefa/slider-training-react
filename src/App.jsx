import React from 'react';
import Slide from './Slide';

const App = () => {
  const slides = [
    {
      id: 0,
      titulo: 'GOOD IDEAS comes <b>FIRST!</b>',
      imagem: 'http://placeimg.com/1920/1080/nature',
    },
    {
      id: 1,
      titulo: 'FIRST GOOD comes <b>IDEAS!</b>',
      imagem: 'http://placeimg.com/1920/1080/nature?t=1638035739665',
    },
    {
      id: 2,
      titulo: 'FIRST IDEAS comes <b>GOOD!</b>',
      imagem: 'http://placeimg.com/1920/1080/nature?t=1637055849765',
    },
  ];

  return <Slide slides={slides}></Slide>;
};

export default App;
