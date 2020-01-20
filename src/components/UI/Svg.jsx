import React from 'react';

const Svg = ({ comments }) => {
  return (
    <div>
      <svg></svg>
      {comments && <p>{comments}</p>}
    </div>
  );
};

export default Svg;
