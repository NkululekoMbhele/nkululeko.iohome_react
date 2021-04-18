import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className='footer-container'>

      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='social-container'>
              <h1>Get In Touch</h1>
              <div class='social-icons'>
                <Link
                  class='social-icon-link pinterest'
                  to='/'
                  target='_blank'
                  aria-label='Facebook'
                >
                  <i class='fab fa-pinterest' />
                </Link>
                <Link
                  class='social-icon-link instagram'
                  to='/'
                  target='_blank'
                  aria-label='Instagram'
                >
                  <i class='fab fa-instagram' />
                </Link>
                <Link
                  class='social-icon-link github'
                  to='/'
                  target='_blank'
                  aria-label='Youtube'
                >
                  <i class='fab fa-github' />
                </Link>
                <Link
                  class='social-icon-link twitter'
                  to='/'
                  target='_blank'
                  aria-label='Twitter'
                >
                  <i class='fab fa-twitter' />
                </Link>
                <Link
                  class='social-icon-link twitter'
                  to='/'
                  target='_blank'
                  aria-label='LinkedIn'
                >
                  <i class='fab fa-linkedin' />
                </Link>
              </div>
          
            </div>
          
          <small class='website-rights'>{year} &copy; Designed by <span>Nkululeko Mbhele</span>  </small>
        </div>
      </section>
    </div>
  );
}

export default Footer;
