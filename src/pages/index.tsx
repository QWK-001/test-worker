import { ConfigProvider, theme } from 'antd';
import 'antd/dist/reset.css'; // 确保使用的是 v5 的样式
import React, { useState } from 'react';
import HomePage from './homePage';
import './index.css'; // 全局样式
import SubjectPage from './subjectPage/index';

const App: React.FC = () => {
  // TODO : 接口连调时使用状态管理库来管理登录状态
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 登录状态
  return (
    <ConfigProvider
      theme={{
        components: {
          Input: {
            colorBorder: '#000000', // 自定义边框颜色
            colorBgContainer: '#000000', // 背景颜色改为黑色
            colorText: '#ffffff', // 文本颜色改为白色
            colorIcon: '#ffffff', // 图标颜色改为白色
            borderRadius: 25, // 自定义圆角
            controlHeight: 40, // 自定义高度
            algorithm: theme.darkAlgorithm, // 使用暗黑主题算法
            colorTextPlaceholder: '#ffffff', // 占位符颜色改为白色
          },
        },
      }}
    >
      {isLoggedIn ? (
        <SubjectPage />
      ) : (
        <HomePage onLogin={() => setIsLoggedIn(true)} />
      )}
    </ConfigProvider>
  );
};

export default App;
