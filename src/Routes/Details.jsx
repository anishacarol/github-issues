import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import getData from '../services';

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
  return <></>;
};

export default Details;
