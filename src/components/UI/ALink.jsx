import React from 'react';
import { Link } from 'react-router-dom';

const ALink = ({ href, text }) => (
  <Link to={href} style={{ fontWeight: '600', fontSize: '16px' }}>
    {text}
  </Link>
);

export default ALink;
