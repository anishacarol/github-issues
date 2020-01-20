import React from 'react';
import { Link } from 'react-router-dom';

const IssueTextLink = ({ href, text }) => {
  return (
    <div>
      <link to={href}>{text}</link>
    </div>
  );
};

export default IssueTextLink;
