import React from 'react';
import PropTypes from 'prop-types';

export default function index({ selectedName }) {
  return (
    <>
      {selectedName?.socials && (
        <div>
          <a>Social</a>
          <div className="social-box">
            <div className="instagram">
              {selectedName?.socials?.twitter ? (
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk3OvoCfz9eSQgQ0NhRXw7lYtN7GfQaFXWgQ&usqp=CAU"
                  width="17px"
                  alt=""
                />
              ) : (
                ''
              )}
              <a>{selectedName?.socials?.twitter}</a>
            </div>
            <div className="instagram">
              {selectedName?.socials?.instagram ? (
                <img
                  src="https://img.icons8.com/windows/452/instagram-new.png"
                  width="20px"
                />
              ) : (
                ''
              )}
              <a>{selectedName?.socials?.instagram}</a>
            </div>
            <div className="instagram">
              {selectedName?.socials?.facebook ? (
                <img
                  src="https://www.pngitem.com/pimgs/m/519-5190929_facebook-icon-svg-grey-hd-png-download.png"
                  width="15px"
                />
              ) : (
                ''
              )}
              <a>{selectedName?.socials?.facebook}</a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

index.propTypes = {
  selectedName: PropTypes.object.isRequired,
};
