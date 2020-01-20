import React from 'react';
import Svg from '../UI/Svg';
import Issue from './Issue';
import Para from '../UI/Para';

const IssueRow = () => (
  <div>
    <Svg
      fillRule="evenodd"
      d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 011.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"
    />
    <Issue />
    <Para />
  </div>
);

export default IssueRow;
