import React from 'react';
import Comment from '../../Comment';
import ALink from '../../UI/ALink';
import Tag from '../../UI/Tag';
import Img from '../../UI/Img';
import './issue.css';
import InfoIcon from '../../svg/InfoIcon';
import Para from '../../UI/Para';

const Issue = ({ obj }) => (
  <div className="issue">
    <div className="textWrapper">
      <div className="infoIcon">
        <InfoIcon />
      </div>
      <div className="issueText">
        <div className="textLink">
          <ALink href={`details/${obj.number}`} text={obj.title} />
        </div>
        <span className="tagLink">
          <Tag labelArr={obj.labels} />
        </span>
        <div className="para">
          <Para
            num={obj.number}
            dateObj={obj.created_at}
            name={obj.user.login}
          />
        </div>
      </div>
      <div>
        <Img className="image" src="" alt="Image" />
      </div>
      <div className="comment-wrapper">
        <Comment
          className="comment"
          numOfComments={obj.comments === 0 ? ' ' : obj.comments}
        />
      </div>
    </div>
  </div>
);

export default Issue;
