import React from 'react';
import { Link } from 'react-router-dom';

const IssueTextLink = ({ href, text }) => {
  return (
    <div>
      <Link to={href}>{text}</Link>
    </div>
  );
};

export default IssueTextLink;
