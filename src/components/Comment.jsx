import React from 'react';
import CommentIcon from './svg/CommentIcon';

const Comment = ({ numOfComments }) => (
  <>
    <CommentIcon />
    <span>{numOfComments}</span>
  </>
);

export default Comment;
