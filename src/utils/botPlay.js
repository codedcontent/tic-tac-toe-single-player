const botPlay = (positionsLeft) => {
  return positionsLeft[Math.floor(Math.random() * positionsLeft.length)];
};

export default botPlay;
