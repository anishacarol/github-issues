import React from 'react';
import Comment from '../../Comment';
import ALink from '../../UI/ALink';
import Tag from '../../UI/Tag';
import Img from '../../UI/Img';
import './issue.css';
import InfoIcon from '../../svg/InfoIcon';

const Issue = () => (
  <div className="issue">
    <div className="textWrapper">
      <div className="infoIcon">
        <InfoIcon />
      </div>
      <div className="issueText">
        <div className="textLink">
          <ALink
            href="#Details"
            text="HellooooodEWGREhaer5hy5etya5ha5eghkjegaeguhaels;ijgnwilrhhtrhdtrjuytujytjd7yjutkk7uasdfreagsgtrjudyjtykdtyjsryjregasregraegrgdfgzregergy5syresaeryhs5thtrhrdgbsrgs"
          />
        </div>
        <span className="tagLink">
          <Tag
            issueKey="status"
            issueValue="unconformed"
            backgroundColor="red"
            textColor="black"
          />
        </span>
      </div>
      <div className="imgAndComment">
        <Img className="image" src="" alt="Image" />
        <Comment className="comment" />
      </div>
    </div>
    <div className="para">
      <p>hjghjgkjhkj</p>
    </div>
  </div>
);

export default Issue;
