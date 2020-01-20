import React from 'react';
import FancyLink from '../UI/FancyLink';
import IssueTextLink from '../IssueRows/IssueTextLink';
import Img from '../UI/Img';
import Svg from '../UI/Svg';

const Issue = () => {
  return (
    <div>
      <IssueTextLink href="#Details" text="Hellooooo" />
      <FancyLink
        issueKey="status"
        issueValue="unconformed"
        backgroundColor="red"
        textColor="black"
      />
      <Img src="" alt="Image" />
      <Svg comments="12"></Svg>
    </div>
  );
};

export default Issue;
