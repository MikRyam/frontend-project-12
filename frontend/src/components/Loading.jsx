import React from 'react';

const Loading = () => {
  return (
    <div>
      <span
        className="spinner-border spinner-border-sm"
        role="status"
        aria-hidden="true"
      ></span>
      <span> Loading...</span>
    </div>
  );
};

export default Loading;
