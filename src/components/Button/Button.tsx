import React from 'react';
import styles from './Button.less';

interface ButtonProps {
  text: React.ReactNode;
  onClick?: () => void;
  style?: React.CSSProperties;
  className?: string;
  bgColor?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  style,
  className,
  bgColor,
}) => {
  return (
    <div
      className={`${styles.buttonWrapper} ${className || ''}`}
      style={{
        ...style,
        backgroundColor: bgColor,
        boxShadow: `0 5px 0px ${
          bgColor ? bgColor + '80' : 'rgba(0, 0, 0, 0.2)'
        }`, // 动态设置阴影颜色
      }} // 使用 CSS 变量
      onClick={onClick}
    >
      <div className={styles.buttonContent}>{text}</div>
    </div>
  );
};

export default Button;
