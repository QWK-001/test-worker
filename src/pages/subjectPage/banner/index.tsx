import { useModel } from '@umijs/max';
import React from 'react';
import HomeWidgetsContainer from '../homeWidgetsContainer';
import './index.less';
const Banner: React.FC = () => {
  const { theme } = useModel('subjectPage.useSubjectPageStore'); // 当前选中的标签

  return (
    <div className="gamesHero">
      {theme === 'yellow' ? (
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
      ) : (
        <picture>
          <source
            media="(max-width: 768px)"
            srcSet="https://static.crowncoinscasino.com/production/assets/banner/page-lobby_sc/theme-CC2025DEFUALT/banner-1739716574011/mobile.webp"
          />
          <img
            alt="CrownCoinsCasino header"
            className="bannerImage"
            src="https://static.crowncoinscasino.com/production/assets/banner/page-lobby_sc/theme-CC2025DEFUALT/banner-1739716573686/desktop.webp"
          />
        </picture>
      )}
      <HomeWidgetsContainer />
    </div>
  );
};

export default Banner;
