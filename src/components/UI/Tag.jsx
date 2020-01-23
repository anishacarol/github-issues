import React from 'react';
import { Link } from 'react-router-dom';

const Tag = ({ labelArr }) => (
  <>
    {labelArr.map((item) => (
      <Link
        to={item.url}
        style={{
          backgroundColor: `#${item.color}`,
          padding: '5px 10px',
          marginRight: '5px',
        }}
      >
        {item.name}
      </Link>
    ))}
  </>
);
export default Tag;
