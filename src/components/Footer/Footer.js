import React from 'react';
import './footer.css';

const Footer = ({ fix }) => {
  return (
    <div className={fix ? 'footer-containerfix' : 'footer-container'}>
      <h2>
        Developer :{' '}
        <a
          href='https://github.com/rehankhalil462'
          rel='noopener noreferrer'
          target='_blank'
        >
          Rehan Khalil
        </a>{' '}
      </h2>
    </div>
  );
};

export default Footer;
