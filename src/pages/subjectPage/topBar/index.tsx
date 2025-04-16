import ccodIcon from '@/public/icon/ccod.png';
import scodIcon from '@/public/icon/scod.png';
import topLogo from '@/public/icon/topLogo.svg';
import topLogo_w from '@/public/icon/topLogo_w.svg';
import { useModel } from '@umijs/max';
import React, { useEffect, useState } from 'react';
import styles from './index.less';

interface TopBarProps {
  logoSrc?: string; // 可选的 logo 图片路径
  onLogoClick?: () => void; // 点击 logo 的回调
  onMenuClick?: () => void; // 点击菜单按钮的回调
}

const TopBar: React.FC<TopBarProps> = () => {
  const [isFrontVisible, setIsFrontVisible] = useState(false); // 控制正反面显示
  const [activeCoin, setActiveCoin] = useState<'social' | 'sweep'>('social'); // 当前激活的 coin 类型
  const [switcherPosition, setSwitcherPosition] = useState('0px'); // 控制左右移动
  const [displayedBalance, setDisplayedBalance] = useState(21985); // 当前显示的余额
  const { updateTheme, theme, scrollState } = useModel(
    'subjectPage.useSubjectPageStore',
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFrontVisible((prev) => !prev); // 每 2 秒切换正反面
    }, 2000); // 每 2 秒切换一次
    return () => clearInterval(interval); // 清除定时器
  }, []);

  const animateBalance = (start: number, end: number) => {
    const duration = 2000; // 动画持续时间（毫秒）
    const stepTime = 16; // 每帧时间（约 60fps）
    const steps = Math.ceil(duration / stepTime); // 总步数
    const increment = (end - start) / steps; // 每步增加的值
    let currentStep = 0;

    const update = () => {
      currentStep++;
      const newValue = start + increment * currentStep;
      setDisplayedBalance(parseFloat(newValue.toFixed(2))); // 更新显示值
      if (currentStep < steps) {
        requestAnimationFrame(update); // 下一帧继续
      } else {
        setDisplayedBalance(end); // 确保最终值正确
      }
    };

    requestAnimationFrame(update);
  };

  const handleSwitchCoin = () => {
    const newTheme = activeCoin === 'social' ? 'green' : 'yellow';
    const newBalance = newTheme === 'green' ? 2.98 : 21985; // 根据主题设置目标余额
    animateBalance(displayedBalance, newBalance); // 动画更新余额

    setActiveCoin((prev) => (prev === 'social' ? 'sweep' : 'social')); // 切换 coin 类型
    setSwitcherPosition((prev) => (prev === '0px' ? '2rem' : '0px')); // 切换位置
    // 设置背景图、切换主题色
    updateTheme(newTheme);
  };

  return (
    <div
      className={`${styles.controls} ${styles.homeControls}`}
      data-theme={theme}
    >
      <div className={styles.crownBadge} data-testid="crownBadge">
        <div className={styles.reactCardFlip}>
          <div
            className={`${styles.reactCardFlipper} ${
              isFrontVisible ? styles.showFront : styles.showBack
            }`}
          >
            <div className={styles.reactCardFront}>
              <div className={styles.innerCircle}>
                <img
                  alt="Crown"
                  className={styles.crownIcon}
                  src="https://crowncoinscasino.com/white-crown.svg"
                />
              </div>
            </div>
            <div className={styles.reactCardBack}>
              <div className={styles.innerCircle}>
                <span className={styles.percentages}>10%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.balancePanel} id="gc_balance">
        <div className={styles.balancePanelLeft}>
          {theme === 'green' ? 'sc' : 'cc'}
        </div>
        <div
          className={styles.balancePanelBalance}
          data-testid="lobby-balance-bar"
          id="balance"
        >
          {displayedBalance.toLocaleString()} {/* 显示动画更新的余额 */}
        </div>
        <div className={styles.balancePanelRight}>
          <button
            type="button"
            className={styles.balancePanelAdd}
            data-testid="lobby-open-store-btn"
          >
            +
          </button>
        </div>
      </div>
      <div
        className={styles.gameTypeSwitcher}
        data-testid="coin-switcher"
        id="swicher"
      >
        <div
          className={styles.gameTypeSwitcherInner}
          onClick={handleSwitchCoin}
        >
          <div
            className={styles.gameTypeSwitch}
            style={{ left: switcherPosition }} // 设置动态位置
          >
            <div className={styles.gameTypeSwitcherDecoration}>
              <img
                src={scrollState ? topLogo_w : topLogo}
                alt=""
                style={{ width: '100%' }}
              />
            </div>

            <picture
              className={styles.gameTypeSwitcherCoin}
              style={{ cursor: 'pointer' }}
            >
              {activeCoin === 'social' ? (
                <img alt="Social Coin" src={ccodIcon} />
              ) : (
                <img alt="Sweep Coin" src={scodIcon} />
              )}
            </picture>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
