import React from 'react';

const Img = ({ src, altText }) => {
  return (
    <div>
      <img src={src} alt={altText}></img>
    </div>
  );
};

export default Img;
