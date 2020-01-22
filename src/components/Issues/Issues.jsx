import React, { useState, useEffect } from 'react';
import getData from '../../services';
import Issue from './Issue/Issue';
import './issues.css';

const Issues = () => {
  const [issueData, setIssueData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      getData().then((data) => {
        setIssueData(data);
      });
    };
    fetchData();
  }, []);

  return (
    <div className="wrapper">
      {issueData.length > 0 && issueData.map((item) => <Issue obj={item} />)}
    </div>
  );
};

export default Issues;
