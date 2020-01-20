import React from 'react';
import { Link } from 'react-router-dom';

const FancyLink = ({ issueKey, issueValue, backgroundColor, textColor }) => {
  return (
    <div>
      <Link
        to="#Details"
        style={{ background: { backgroundColor }, color: { textColor } }}
      >
        {issueKey}:{issueValue}
      </Link>
    </div>
  );
};

export default FancyLink;
