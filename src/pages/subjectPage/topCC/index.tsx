import React from 'react';
import './index.less'; // 引入对应的样式文件

interface TopBarProps {
  logoSrc?: string; // 可选的 logo 图片路径
  onLogoClick?: () => void; // 点击 logo 的回调
  onMenuClick?: () => void; // 点击菜单按钮的回调
}

const TopBar: React.FC<TopBarProps> = ({
  logoSrc,
  onLogoClick,
  onMenuClick,
}) => {
  return (
    <div className="_top_c3ws4_39">
      <div className="_logo_c3ws4_49">
        <div
          className="app-logo-wrapper"
          style={{ cursor: 'pointer' }}
          onClick={onLogoClick}
        >
          <img src={logoSrc || ''} alt="Logo" />
          <span className="app-logo__text">Crown Coins Casino</span>
        </div>
      </div>
      <div className="_menuToggleWrapper_c3ws4_101">
        <button
          type="button"
          className="_hamburger_c3ws4_110"
          data-testid="menuButton"
          onClick={onMenuClick}
        >
          <img src="" alt="Menu Icon" />
          <div className="_dot_wrapper_c3ws4_21"></div>
        </button>
      </div>
    </div>
  );
};

export default TopBar;
