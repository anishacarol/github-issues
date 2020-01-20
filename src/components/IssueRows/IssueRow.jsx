import React from 'react';
import Svg from '../UI/Svg';
import Issue from './Issue';
import Para from '../UI/Para';

const IssueRow = () => {
  return (
    <div>
      <Svg></Svg>
      <Issue />
      <Para />
    </div>
  );
};

export default IssueRow;
