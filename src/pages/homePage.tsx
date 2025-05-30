import logo from '@/assets/logo@2x.png';
import { mockGameList } from '@/mock/mockData';
import Footer from '@/pages/footer';
import { useState } from 'react';
import styles from './homePage.less';
import AccountModal from './Login/accountModal';
import LoginModal from './Login/loginModal';

import { Button, Modal } from '@/components/index';
import { Input } from 'antd';

import bannerImg from '@/assets/banner.png';
import girlImg from '@/assets/img_1@3x.png';

interface HomePageProps {
  onLogin: () => void; // 登录回调
}

export default function HomePage({ onLogin }: HomePageProps) {
  const handleLogin = () => {
    console.log('User logged in');
    onLogin();
  };

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isAccountModalVisible, setIsAccountModalVisible] = useState(false);
  const [isLoginModalVisible, setIsLoginModalVisible] = useState(false);
  const [isResetPasswordModalVisible, setIsResetPasswordModalVisible] =
    useState(false);
  // 用户须知弹窗
  const openModal = () => setIsModalVisible(true);
  const closeModal = () => setIsModalVisible(false);

  // 注册弹窗
  const openAccountModal = () => setIsAccountModalVisible(true);
  const closeAccountModal = () => setIsAccountModalVisible(false);

  // 登录弹窗
  const openLoginModal = () => setIsLoginModalVisible(true);
  const closeLoginModal = () => setIsLoginModalVisible(false);
  const [passwordVisable, setPasswordVisible] = useState(false);

  // 重置密码弹窗
  const openResetPasswordModal = () => setIsResetPasswordModalVisible(true);
  const closeResetPasswordModal = () => setIsResetPasswordModalVisible(false);

  return (
    <div>
      <div className={styles.container}>
        <picture>
          <source media="(max-width: 768px)" srcSet={bannerImg} />
          <img src={bannerImg} alt="background" className={styles.bgImg} />
        </picture>

        <div className={styles.heroHeader}>
          <div className={styles.appLog}>
            <img style={{ width: '50%', margin: '40px 0 0 40px' }} src={logo} />
          </div>
          {/* <div
            className={styles.heroHeaderControls}
            style={{ position: 'relative', right: '30px' }}
          >
            <button
              type="button"
              data-testid="lobby-signup-btn"
              style={{ marginRight: '0.5rem' }}
              className={styles.animationPopup}
              onClick={openModal}
            >
              SIGN UP
            </button>
            <button
              type="button"
              data-testid="lobby-login-btn"
              className={`${styles.animationPopup} ${styles.loginIcon}`}
              onClick={openLoginModal}
            >
              LOG IN
            </button>
          </div> */}
        </div>

        {/* TODO 点击弹窗注册组件 */}
        <div className={styles.joinNow}>
          <button
            type="button"
            data-testid="lobby-signup-btn"
            className={styles.animationPopup}
            onClick={openModal}
          >
            JOIN NOW
          </button>
        </div>
      </div>

      <div className={styles.wrapper}>
        <div
          className={styles.background}
          style={{
            backgroundColor: 'rgb(0,0,0)',
            opacity: 1,
            visibility: 'visible',
          }}
        ></div>
        {/* <div
          className={styles.backgroundPattern}
          style={{
            filter:
              'invert(8%) sepia(27%) saturate(5362%) hue-rotate(256deg) brightness(82%) contrast(109%)',
            opacity: 1,
            visibility: 'visible',
            backgroundImage:
              'url(https://crowncoinscasino.com/assets/pattern-BsQJmy0E.svg)',
          }}
        ></div> */}
        <div className={styles.content}>
          <div className={styles.homeContent}>
            <div className={styles.homeContentPlay}>
              <div className={styles.homeContentPlayTitle}>
                <img
                  alt="TOP GAMES image"
                  src="https://static.crowncoinscasino.com/production/assets/game-category/TOPGAMES/imageFile-1724225168471.png"
                  style={{
                    width: '28px',
                    margin: '2px',
                    filter: 'hue-rotate(90deg)',
                  }}
                />
                <p style={{ margin: '0 1rem', textAlign: 'center' }}>
                  TOP{' '}
                  <span style={{ color: '#01DB80', fontWeight: '700' }}>
                    Free-to-play{' '}
                  </span>
                  Casino STYLE GAMES
                </p>
                <img
                  alt="TOP GAMES image"
                  src="https://static.crowncoinscasino.com/production/assets/game-category/TOPGAMES/imageFile-1724225168471.png"
                  style={{
                    width: '28px',
                    margin: '2px',
                    filter: 'hue-rotate(90deg)',
                  }}
                ></img>
              </div>
              <div className={styles.homeContentPlayImgs}>
                {mockGameList.map((game) => (
                  <div key={game.id} className={styles.preloadBlur}>
                    <picture>
                      <source
                        media="screen and (min-width: 1100px) and (min-height: 700px)"
                        srcSet={game.srcSet}
                      />
                      <img
                        alt={''}
                        className={styles.lpImage}
                        loading="lazy"
                        src={game.src}
                      ></img>
                    </picture>
                  </div>
                ))}
              </div>
              <div className={styles.buttonWrapper} onClick={openModal}>
                <div className={styles.buttonContent}>
                  SIGN UP TO PLAY FOR FREE
                </div>
              </div>
            </div>
            <div className={styles.homeContentPurchase}>
              <div className={styles.homeContentPurchaseTitle}>
                NO PURCHASE necessary!
              </div>
              <div
                className={styles.homeContentPurchaseLink}
                onClick={openModal}
              >
                it's always free to play
              </div>
              <div style={{ textAlign: 'center' }}>
                <picture>
                  <source srcSet={girlImg} type="image/png" />
                  <img
                    style={{ height: 'auto', maxWidth: '100%' }}
                    alt="Girl with a phone"
                    className="home__content-purchase-hero-img"
                    loading="lazy"
                    src={girlImg}
                  />
                </picture>
              </div>
              <div
                style={{
                  marginTop: '-2.8rem',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                className={styles.buttonWrapper}
                onClick={openModal}
              >
                <div className={styles.buttonContent}>FIND OUT MORE</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />

      {/* 用户须知弹窗 */}
      <Modal
        isVisible={isModalVisible}
        title="You are almost there"
        onClose={closeModal}
        width="90vw"
        style={{ maxWidth: '600px' }}
      >
        <div style={{ textAlign: 'center', fontWeight: '600' }}>
          <p>To start playing, you need to accept our</p>
          <p className="termsLink">
            <a
              href="/pages/terms-of-service"
              rel="noreferrer"
              target="_blank"
              style={{ color: '#01db80' }}
            >
              Terms of Service
            </a>{' '}
            &amp;{' '}
            <a
              href="/pages/privacy-policy"
              rel="noreferrer"
              target="_blank"
              style={{ color: '#01db80' }}
            >
              Privacy Policy
            </a>
          </p>
          <p>
            By using our site, you confirm you’re 18+ and not a resident of an
            excluded territory.
          </p>
          <div
            style={{
              marginBottom: '20px',
            }}
            className={styles.buttonWrapper}
            onClick={() => {
              closeModal();
              openAccountModal();
            }}
          >
            <div
              style={{ fontSize: '1.5rem' }}
              className={styles.buttonContent}
            >
              ACCEPT
            </div>
          </div>
        </div>
      </Modal>
      {/* 通过企业注册弹窗 */}
      <AccountModal
        isVisible={isAccountModalVisible}
        onClose={closeAccountModal}
        onLoginClick={openLoginModal}
      />
      {/* 登录弹窗 */}
      <LoginModal
        isVisible={isLoginModalVisible}
        onClose={closeLoginModal}
        onForgotPasswordClick={openResetPasswordModal}
        onLogin={handleLogin}
      />

      {/* 重置密码 */}
      <Modal
        isVisible={isResetPasswordModalVisible}
        title="Reset Password"
        onClose={closeResetPasswordModal}
        width="90vw"
        style={{ maxWidth: '500px' }}
      >
        <div style={{ textAlign: 'center', padding: '10px 30px' }}>
          <p>
            Enter the email associated with your account and we will send you
            password reset instructions.
          </p>
          <Input placeholder="Email Address" />
          <Button
            onClick={() => {
              closeResetPasswordModal();
              openLoginModal();
            }}
            text={
              <div className={styles.cjBtn}>
                <span>RESET PASSWORD</span>
              </div>
            }
            bgColor="#01db80"
            style={{ color: '#ffffff', width: '70%', margin: '20px 0' }}
          />

          <div style={{ fontSize: '.8rem' }}>
            <span>Don't have an account?</span>
            <span
              onClick={() => {
                closeResetPasswordModal();
                openModal();
              }}
              style={{
                cursor: 'pointer',
                marginLeft: '.5rem',
                color: '#01db80',
                fontWeight: 700,
                textDecoration: 'underline',
                textTransform: 'uppercase',
              }}
            >
              Sign Up
            </span>
          </div>
        </div>
      </Modal>
    </div>
  );
}
