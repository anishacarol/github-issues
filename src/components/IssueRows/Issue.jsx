import React from 'react';
import FancyLink from '../UI/FancyLink';
import IssueTextLink from './IssueTextLink';
import Img from '../UI/Img';
// import Svg from '../UI/Svg';

const Issue = () => (
  <div>
    <IssueTextLink href="#Details" text="Hellooooo" />
    <FancyLink
      issueKey="status"
      issueValue="unconformed"
      backgroundColor="#ff1c45"
      textColor="black"
    />
    <Img src="" alt="Image" />
  </div>
);

export default Issue;
