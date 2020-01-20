import React from 'react';
import { Link } from 'react-router-dom';

const ALink = ({ href, text }) => (
  <div>
    <Link to={href}>{text}</Link>
  </div>
);

export default ALink;
