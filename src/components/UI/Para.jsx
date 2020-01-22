import React from 'react';

export default function Para({ num, name, dateObj }) {
  return (
    <>
      <p>{`#${num} opened on ${dateObj} by ${name}`}</p>
    </>
  );
}
