import { SearchOutlined } from '@ant-design/icons';
import { Button, Col, Flex, Row } from 'antd';
import { useEffect, useState } from 'react';

import logo from '@/assets/logo_bk.svg';
import logoW from '@/public/icon/logo_w.svg';
import moreSvg from '@/public/icon/more.svg';
import moreWSvg from '@/public/icon/more_w.svg';
import styles from './index.less';
const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('HOME'); // 当前选中的标签
  const [isGreenTheme, setIsGreenTheme] = useState(false); // 新增绿色主题状态

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const tabs = [
    { text: 'HOME' },
    { text: 'NEW RELEASES' },
    { text: 'EXCLUSIVE' },
    { text: 'EARLY BIRD' },
    { text: 'TOP GAMES' },
    { text: 'SLOTS' },
  ];

  return (
    <nav
      className={`${styles.navbar} 
    ${scrolled ? styles.scrolled : ''} 
    ${isGreenTheme ? styles.greenTheme : ''}`}
    >
      <div className={styles.navbarTop}>
        <Row justify="space-between" align="middle">
          <Col style={{ textAlign: 'left' }}>
            <Flex>
              <Flex vertical>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                  }}
                >
                  <img src={scrolled ? logoW : logo} style={{ width: 90 }} />
                  <span
                    style={{
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      color: scrolled ? '#fff' : '#000',
                    }}
                  >
                    Crown Coins Casino
                  </span>
                </div>
              </Flex>
            </Flex>
          </Col>
          <Col style={{ textAlign: 'right', cursor: 'pointer' }}>
            <Flex>
              {scrolled ? <img src={moreWSvg} /> : <img src={moreSvg} />}
            </Flex>
          </Col>
        </Row>
      </div>

      <div className={styles.filtersContainer}>
        <Row style={{ overflowX: 'auto' }}>
          <Col span={24}>
            <Flex>
              <div className={styles.logoGroup}>
                <Button shape="circle" icon={<SearchOutlined />} />
              </div>
              <div className={styles.navItems}>
                {tabs.map((tab) => (
                  <span
                    key={tab.text}
                    className={`${styles.navLink} ${
                      activeTab === tab.text ? styles.active : ''
                    }`}
                    onClick={() => setActiveTab(tab.text)} // 点击时设置当前选中的标签
                  >
                    {tab.text}
                  </span>
                ))}
              </div>
            </Flex>
          </Col>
        </Row>
      </div>

      {/* <button onClick={() => setIsGreenTheme(!isGreenTheme)}>change</button> */}
    </nav>
  );
};

export default NavBar;
