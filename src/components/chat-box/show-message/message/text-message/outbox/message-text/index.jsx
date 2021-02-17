import React from 'react';
import PropTypes from 'prop-types';

export default function index({ message }) {
  return (
    <div className="text">
      {message?.content.split('\n').map((text, id) => {
        return <div key={id}>{text}</div>;
      })}
    </div>
  );
}

index.propTypes = {
  message: PropTypes.object.isRequired,
};
