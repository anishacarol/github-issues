import React from 'react';

const Svg = ({ comments, fillRule, d }) => (
  <div>
    <svg
      className="octicon octicon-issue-opened open"
      viewBox="0 0 14 16"
      version="1.1"
      width="14"
      height="16"
      aria-hidden="true"
    >
      <path fillRule={fillRule} d={d} />
    </svg>
    {comments && <p>{comments}</p>}
  </div>
);

export default Svg;
