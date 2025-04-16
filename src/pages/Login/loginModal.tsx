import { Button, Modal } from '@/components/index';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Input } from 'antd';
import React from 'react';
import styles from './index.less';

interface LoginModalProps {
  isVisible: boolean;
  onClose: () => void;
  onForgotPasswordClick: () => void;
  onLogin: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({
  isVisible,
  onClose,
  onForgotPasswordClick,
  onLogin,
}) => {
  return (
    <Modal
      isVisible={isVisible}
      title="Log in"
      onClose={onClose}
      width="90vw"
      style={{ maxWidth: '500px' }}
    >
      <div style={{ textAlign: 'center' }}>
        {/* <Button
          text={
            <div className={styles.cjBtn}>
              <img
                className="iconImg"
                src={require('@/assets/login-icon.png')}
                style={{ width: '20px', marginRight: '10px' }}
              />
              <span>Log in with Apple</span>
            </div>
          }
          bgColor="#ffffff"
          style={{ color: '#000000', width: '70%', marginBottom: '20px' }}
        />

        <Button
          text={
            <div className={styles.cjBtn}>
              <img
                className="iconImg"
                src={require('@/assets/login-icon.png')}
                style={{ width: '20px', marginRight: '10px' }}
              />
              <span>Log in with Google</span>
            </div>
          }
          bgColor="#ffffff"
          style={{ color: '#000000', width: '70%', marginBottom: '20px' }}
        />

        <Button
          text={
            <div className={styles.cjBtn}>
              <img
                className="iconImg"
                src={require('@/assets/login-icon.png')}
                style={{ width: '20px', marginRight: '10px' }}
              />
              <span>Log in with Facebook</span>
            </div>
          }
          bgColor="#0042ff"
          style={{ color: '#ffffff', width: '70%', marginBottom: '20px' }}
        /> */}

        {/* <div
          style={{
            display: 'flex',
            columnGap: '.5rem',
            alignItems: 'center',
            margin: '0 auto',
            width: '70%',
          }}
        >
          <hr style={{ flex: 1, color: '#FFFFFF' }}></hr>
          <span
            style={{
              fontSize: '2rem',
              fontWeight: 400,
              lineHeight: 1,
              textTransform: 'uppercase',
            }}
          >
            Or
          </span>
          <hr style={{ flex: 1, color: '#FFFFFF' }}></hr>
        </div> */}

        <div style={{ margin: '0 auto', width: '70%' }}>
          <p
            style={{
              textAlign: 'left',
              margin: 0,
              padding: '0 15px',
              fontSize: 14,
              fontWeight: 700,
            }}
          >
            EMAIL
          </p>
          <Input placeholder="Email Address" />

          <p
            style={{
              textAlign: 'left',
              margin: '20px 0 0',
              padding: '0 15px',
              fontSize: 14,
              fontWeight: 700,
            }}
          >
            PASSWORD
          </p>
          <Input.Password
            placeholder="Enter Password"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
        </div>
        <Button
          onClick={onLogin}
          text={
            <div className={styles.cjBtn}>
              <span>LOG IN</span>
            </div>
          }
          bgColor="#3bdb80"
          style={{ color: '#ffffff', width: '70%', margin: '35px 0' }}
        />
        <div style={{ fontSize: '.8rem' }}>
          <span>Forgot your password?</span>
          <span
            onClick={() => {
              onClose();
              onForgotPasswordClick();
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
            Click here
          </span>
        </div>
      </div>
    </Modal>
  );
};

export default LoginModal;
