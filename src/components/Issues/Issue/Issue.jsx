import React from 'react';
import Comments from '../../Comment';
import IssueTextLink from '../../UI/ALink';
import Tag from '../../UI/Tag';
import Img from '../../UI/Img';
import './issue.css';

const Issue = () => (
  <div className="issue">
    <IssueTextLink href="#Details" text="Hellooooo" />
    <Tag
      issueKey="status"
      issueValue="unconformed"
      backgroundColor="#ff1c45"
      textColor="black"
    />
    <Img src="" alt="Image" />
    <Comments />
  </div>
);

export default Issue;
