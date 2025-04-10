import React from 'react';
import './index.less';

const Banner: React.FC = () => {
  return (
    <div className="gamesHero">
      <picture>
        <source
          media="(max-width: 768px)"
          srcSet="https://static.crowncoinscasino.com/production/assets/banner/page-lobby_cc/theme-CC2025DEFUALT/banner-1739716559209/mobile.webp"
        />
        <img
          alt="CrownCoinsCasino header"
          className="bannerImage"
          src="https://static.crowncoinscasino.com/production/assets/banner/page-lobby_cc/theme-CC2025DEFUALT/banner-1739716558771/desktop.webp"
        />
      </picture>
    </div>
  );
};

export default Banner;
