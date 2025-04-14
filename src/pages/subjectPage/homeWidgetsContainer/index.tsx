import { ActivityModal } from '@/components/index';
import { scrollToTop } from '@/utils';
import React, { useEffect, useRef, useState } from 'react';
import './index.less';

const HomeWidgetsContainer: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null); // 创建目标 DOM 节点的 ref
  const [showCircle, setShowCircle] = useState(false);
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

  const openModal = () => {
    scrollToTop();
    setShowCircle(true);
  };
  const closeCircle = () => {
    setShowCircle(false);
  };

  return (
    <>
      <div className="homeWidgetsContainer">
        <div className="homeWidgetsContainer__wrapper">
          <div className="homeWidgetsPosition">
            <div className="home-widgets">
              <div className="home-widget">
                <div
                  className="circle-parent"
                  onClick={() => openModal()}
                  ref={targetRef}
                >
                  <div
                    className="circle"
                    id="widget_id_533fbc2f-0f32-4035-afe0-b69791dc8e0a"
                  ></div>
                  <img
                    alt="Event Mini Image"
                    src="https://static.crowncoinscasino.com/production/assets/widgets/1735554602825-0.webp"
                  />
                  <div className="timer">{formatTime(timeLeft)}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 活动弹窗 */}
      <ActivityModal
        isVisible={showCircle}
        title="Reset Password"
        onClose={closeCircle}
        width="90vw"
        style={{ maxWidth: '500px' }}
        targetRef={targetRef}
      ></ActivityModal>
    </>
  );
};

export default HomeWidgetsContainer;
