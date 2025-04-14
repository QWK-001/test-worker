import { UserCenterModal } from '@/components';
import { scrollToTop } from '@/utils';
import { SearchOutlined } from '@ant-design/icons';
import { useModel } from '@umijs/max';
import { Button, Col, Flex, Row } from 'antd';
import { useEffect, useState } from 'react';

import logo from '@/assets/logo_bk.svg';
import logoW from '@/public/icon/logo_w.svg';
import moreSvg from '@/public/icon/more.svg';
import moreWSvg from '@/public/icon/more_w.svg';
import styles from './index.less';
const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isUserCenterOpen, setIsUserCenterOpen] = useState(false);
  const { activeTab, updateActiveTab, theme, updateScrollState } = useModel(
    'subjectPage.useSubjectPageStore',
  ); // 当前选中的标签

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
      // 将滚动状态存储到useSubjectPageStore
      updateScrollState(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const tabs = [
    { text: 'HOME', type: 1 },
    { text: 'NEW RELEASES', type: 2 },
    { text: 'EXCLUSIVE', type: 3 },
    { text: 'EARLY BIRD', type: 4 },
    { text: 'TOP GAMES', type: 5 },
    { text: 'SLOTS', type: 6 },
  ];

  const openUserCenterModal = () => setIsUserCenterOpen(true);
  const closeUserCenterModal = () => setIsUserCenterOpen(false);
  // ${theme === 'green' ? styles.greenTheme : ''}
  return (
    <>
      <nav
        className={`${styles.navbar} 
    ${scrolled ? styles.scrolled : ''} 
  
    `}
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
            <Col
              style={{ textAlign: 'right', cursor: 'pointer' }}
              onClick={openUserCenterModal}
            >
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
                      key={tab.type}
                      className={`${styles.navLink} ${
                        activeTab === tab.type ? styles.active : ''
                      }`}
                      onClick={() => {
                        scrollToTop(); // 滚动到顶部
                        updateActiveTab(tab.type); // 更新当前选中的标签
                      }}
                    >
                      {tab.text}
                    </span>
                  ))}
                </div>
              </Flex>
            </Col>
          </Row>
        </div>
      </nav>
      <UserCenterModal open={isUserCenterOpen} onClose={closeUserCenterModal} />
    </>
  );
};

export default NavBar;
