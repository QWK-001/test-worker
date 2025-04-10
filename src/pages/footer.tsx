import footerLogo from '@/assets/logo.svg';
import React from 'react';
import './footer.less';

const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img
            style={{ height: '100px', margin: '42px auto' }}
            src={footerLogo}
            alt="Logo"
            className="footer-logo-img"
          />
        </div>
      </div>

      <div className="footer-row">
        <div className="footer-column footer-main-column">
          <h1 className="heading-text theme-text">
            Making sure everyone plays responsibly
          </h1>
          <h6 className="subheading-text" style={{ color: '#fff' }}>
            Find out more on our dedicated Responsible Social Play page.
          </h6>
        </div>
        <div className="footer-column footer-btn-column">
          <div className="btn-box">
            <a
              href="/pages/responsible-social-play"
              target="_blank"
              className="footer-btn theme-bg theme-border"
              style={{ width: '80%' }}
            >
              GO TO RESPONSIBLE SOCIAL GAMING
            </a>
            <img
              src="https://static.crowncoinscasino.com/production/assets/cms/18plus.png"
              className="adult-icon"
              alt="Icon"
            />
          </div>
        </div>
        <div className="footer-column">
          <p className="para-text">
            You are aware and understand that you are providing information to
            Crown Coins Casino. The sole use of this information will be to
            manage this promotion. Copyright © 2023 Sunflower Limited. All
            rights reserved.
          </p>
        </div>

        <div className="footer-column footer-nav-column">
          <div className="footer-nav-box">
            <a
              href="/pages/terms-of-service"
              target="_blank"
              className="footer-link-text"
            >
              Terms of Service
            </a>
            <a
              href="/pages/privacy-policy"
              target="_blank"
              className="footer-link-text"
            >
              Privacy Policy
            </a>
            <a
              href="/pages/responsible-social-play"
              target="_blank"
              className="footer-link-text"
            >
              Responsible Social Play
            </a>
            <a
              href="/pages/invite_friends"
              target="_blank"
              className="footer-link-text"
            >
              Invite Friends Term of Use
            </a>
            <a
              href="https://help.crowncoinscasino.com"
              target="_blank"
              className="footer-link-text support-button"
              rel="noreferrer"
            >
              Contact Us
            </a>
            <a
              href="https://help.crowncoinscasino.com"
              target="_blank"
              className="footer-link-text"
              rel="noreferrer"
            >
              Help Center
            </a>
            <a
              href="tel:+12015354587"
              target="_blank"
              className="footer-link-text"
              rel="noreferrer"
            >
              Support: +1 (201) 535-4587
            </a>
          </div>
        </div>
        <div className="footer-column">
          <p className="para-text">
            Crown Coins Casino is operated by Sunflower Limited. The sweepstakes
            promotions and prizes offered at Crown Coins Casino are operated by
            Sunflower Limited. Sunflower Limited's address is PO Box 5114,
            Fredericksburg, VA 22403-5514. All payments are processed by
            Sunflower Technology Inc. © 2023 Crown Coins Casino. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
