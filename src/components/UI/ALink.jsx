import React from 'react';
import { Link } from 'react-router-dom';

const ALink = ({ href, text }) => <Link to={href}>{text}</Link>;

export default ALink;
