import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import getData from '../../services';
import './details.css';
import InfoIcon from '../svg/InfoIcon';

const Details = () => {
  const { issueid } = useParams();
  console.log(issueid);

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
    <div className="wrapper">
      <div className="datails-title">{issueData.title}</div>
      <div>
        <span className="openSpan">
          <InfoIcon />
          Open
        </span>
        <span>
          {`${issueData.user.login} opened this issue on ${issueData.created_at} - ${issueData.comments} comments`}
        </span>
      </div>
    </div>
  );
};

export default Details;
