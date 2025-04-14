import React, { useEffect, useState } from 'react';
import './Modal.less';

interface ModalProps {
  isVisible: boolean; // 控制模态框是否显示
  title?: string; // 模态框标题
  onClose: () => void; // 关闭模态框的回调函数
  children: React.ReactNode; // 模态框内容
  width?: string; // 模态框宽度（可选）
  style?: React.CSSProperties; // 自定义样式（可选）
}

const Modal: React.FC<ModalProps> = ({
  isVisible,
  title,
  onClose,
  children,
  width = '500px',
  style = {},
}) => {
  const [isClosing, setIsClosing] = useState(false);
  const [isRendered, setIsRendered] = useState(isVisible); // 控制是否渲染模态框

  useEffect(() => {
    if (isVisible) {
      setIsRendered(true);
      setIsClosing(false);
      document.body.classList.add('no-scroll'); // 添加禁止滚动的类
    } else if (isRendered) {
      setIsClosing(true); // 触发关闭动画
      const timer = setTimeout(() => {
        setIsRendered(false);
        document.body.classList.remove('no-scroll'); // 移除禁止滚动的类
      }, 300); // 动画结束后移除模态框
      return () => clearTimeout(timer); // 清除定时器
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
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div
        className={`modal-container ${isClosing ? 'fade-out' : ''}`}
        onClick={handleModalClick}
        style={{ ...style, width }}
      >
        <div className="modal-header">
          <div style={{ textAlign: 'right' }}>
            <button type="button" className="modal-close-btn" onClick={onClose}>
              ×
            </button>
          </div>

          {title && <h2 className="modal-title">{title}</h2>}
        </div>
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
