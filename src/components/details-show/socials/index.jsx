import React from 'react';
import SocialsInfo from './socials-info';
import Media from './media';
import PropTypes from 'prop-types';

export default function Socials({ selectedName }) {
  return (
    <div className="social">
      <SocialsInfo selectedName={selectedName} />
      <Media />
    </div>
  );
}

Socials.propTypes = {
  selectedName: PropTypes.object.isRequired,
};
