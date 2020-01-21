import React from 'react';
import { Link } from 'react-router-dom';

const Tag = ({ href, issueKey, issueValue, backgroundColor, textColor }) => (
  <Link
    to={href}
    style={{ backgroundColor: { backgroundColor }, color: { textColor } }}
  >
    {' '}
    {`${issueKey} : ${issueValue}`}
  </Link>
);

export default Tag;
