import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';
import getData from '../../services';
import './details.css';
import InfoIcon from '../svg/InfoIcon';

const Details = () => {
  const { issueid } = useParams();

  const [issueData, setIssueData] = useState({});

  useEffect(() => {
    const fetchData = () => {
      getData(`/${issueid}`).then((data) => {
        setIssueData(data);
      });
    };
    fetchData();
  }, []);
  return (
    <div className="detail-wrapper">
      <div className="datails-title">{issueData.title}</div>
      <div>
        <span className="openSpan">
          <InfoIcon />
          Open
        </span>
        <span>
          {`${issueData.user && issueData.user.login} opened this issue on ${
            issueData.created_at
          } - ${issueData.comments} comments`}
        </span>
      </div>
      <div className="main">
        <div className="markDown-wrapper">
          <div className="header">
            {`${issueData.user && issueData.user.login} commented on ${
              issueData.created_at
            }`}
          </div>
          <div className="markdown-section" />
          <ReactMarkdown source={issueData.body} />
        </div>
        <div className="aside-section">
          <div className="small-section">
            Assignees:
            <div className="section-data">
              {issueData.assignees === null
                ? 'No one assigned'
                : issueData.assignee}
            </div>
          </div>
          <div className="small-section">
            Labels:
            <div className="section-data">
              {issueData.labels === null
                ? 'No one assigned'
                : issueData.assignee}
            </div>
          </div>
          <div className="small-section">
            Projects:
            <div className="section-data">
              {issueData.assignees === null
                ? 'No one assigned'
                : issueData.assignee}
            </div>
          </div>
          <div className="small-section">
            Milestone:
            <div className="section-data">
              {issueData.assignees === null
                ? 'No one assigned'
                : issueData.assignee}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
