import { Button } from '@/components/index';
import ccodIcon from '@/public/icon/ccod.png';
import scodIcon from '@/public/icon/scod.png';
import React, { useEffect, useState } from 'react';
import styles from './index.less';
interface ModalProps {
  isVisible: boolean;
  title?: string;
  onClose: () => void;
  //   children: React.ReactNode;
  width?: string;
  style?: React.CSSProperties;
  targetRef?: React.RefObject<HTMLElement>;
}

const ActivityModal: React.FC<ModalProps> = ({
  isVisible,
  title,
  onClose,
  //   children,
  width = '500px',
  style = {},
  targetRef,
}) => {
  const [isClosing, setIsClosing] = useState(false);
  const [isRendered, setIsRendered] = useState(isVisible);
  const [targetPosition, setTargetPosition] = useState({ x: 0, y: 0 });

  const [timeLeft, setTimeLeft] = useState(36000);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(
      2,
      '0',
    )}:${String(secs).padStart(2, '0')}`;
  };

  useEffect(() => {
    if (targetRef?.current) {
      const rect = targetRef.current.getBoundingClientRect();
      const absoluteX = rect.left + rect.width / 2 + window.scrollX;
      const absoluteY = rect.top + rect.height / 2 + window.scrollY;

      setTargetPosition({
        x: absoluteX,
        y: absoluteY,
      });
    }
  }, [targetRef]);

  useEffect(() => {
    if (isVisible) {
      setIsRendered(true);
      setIsClosing(false);
      document.body.classList.add('no-scroll'); // 添加禁止滚动的类
    } else if (isRendered) {
      setIsClosing(true);
      const timer = setTimeout(() => {
        setIsRendered(false);
        document.body.classList.remove('no-scroll'); // 移除禁止滚动的类
      }, 300); // 动画时长为 0.3s
      return () => clearTimeout(timer);
    }
    return () => {
      document.body.classList.remove('no-scroll'); // 确保在组件卸载时移除类
    };
  }, [isVisible, isRendered]);

  if (!isRendered) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    onClose();
  };

  const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <div
      className={styles['modal-overlay']}
      style={
        {
          '--target-x': `${targetPosition.x - window.innerWidth / 2}px`,
          '--target-y': `${targetPosition.y - window.innerHeight / 2}px`,
        } as React.CSSProperties
      }
    >
      <div
        className={`${styles['modal-container']} ${
          isClosing ? styles['slide-out'] : styles['slide-in']
        }`}
        onClick={handleModalClick}
        style={{ ...style, width }}
      >
        <div className={styles['offer-layout']}>
          <img
            alt="offer"
            className={styles['offer-bg-image']}
            src="https://static.crowncoinscasino.com/production/assets/builder-layouts/1735554543507-0.webp"
          />
          <button
            type="button"
            className={styles['modal-close-btn']}
            onClick={onClose}
          >
            ×
          </button>
          <div className={styles['modal-content']}>
            <div style={{ cursor: 'default' }}>
              <div className={`${styles['reward']} ${styles['reward-1']}`}>
                <span className={styles['amount'] + ' ' + styles['gc-amount']}>
                  <picture
                    className={styles['coin-img']}
                    style={{ display: 'flex' }}
                  >
                    <img alt="Social Coin" src={ccodIcon} />
                  </picture>
                  800,000
                </span>
                <span className={styles['amount'] + ' ' + styles['sc-amount']}>
                  <span className={styles['plus']}>+</span>
                  <div className={styles['get-free']}>
                    <span>GET</span>
                    <span>FREE</span>
                  </div>
                  <picture
                    className={styles['coin-img']}
                    style={{ display: 'flex' }}
                  >
                    <img alt="Sweep Coin" src={scodIcon} />
                  </picture>
                  40
                </span>
                <Button
                  text={
                    <span style={{ fontWeight: 700, fontSize: '1.3rem' }}>
                      For $14.99
                    </span>
                  }
                  onClick={onClose}
                  bgColor="#01db80"
                  style={{
                    color: '#ffffff',
                    width: '50%',
                    top: '10px',
                  }}
                />
              </div>

              <div className={`${styles['reward']} ${styles['reward-2']}`}>
                <span className={`${styles['amount']} ${styles['gc-amount']}`}>
                  <picture
                    className={styles['coin-img']}
                    style={{ display: 'flex' }}
                  >
                    <img alt="Social Coin" src={ccodIcon} />
                  </picture>
                  800,000
                </span>
                <span className={`${styles['amount']} ${styles['sc-amount']}`}>
                  <span className={styles['plus']}>+</span>
                  <div className={styles['get-free']}>
                    <span>GET</span>
                    <span>FREE</span>
                  </div>
                  <picture
                    className={styles['coin-img']}
                    style={{ display: 'flex' }}
                  >
                    <img alt="Sweep Coin" src={scodIcon} />
                  </picture>
                  40
                </span>
                <Button
                  text={
                    <span style={{ fontWeight: 700, fontSize: '1.3rem' }}>
                      For $14.99
                    </span>
                  }
                  onClick={onClose}
                  bgColor="#01db80"
                  style={{
                    color: '#ffffff',
                    width: '50%',
                    top: '11px',
                  }}
                />
              </div>

              <div className={styles.timer}>{formatTime(timeLeft)}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityModal;
