import { Button, Modal } from '@/components/index';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Input } from 'antd';
import React from 'react';
import styles from './index.less';

interface AccountModalProps {
  isVisible: boolean;
  onClose: () => void;
  onLoginClick: () => void;
}

const AccountModal: React.FC<AccountModalProps> = ({
  isVisible,
  onClose,
  onLoginClick,
}) => {
  return (
    <Modal
      isVisible={isVisible}
      title="Create account"
      onClose={onClose}
      width="90vw"
      style={{ maxWidth: '600px' }}
    >
      <div style={{ textAlign: 'center', fontWeight: '600' }}>
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
          onClick={() => {
            onClose();
            onLoginClick();
          }}
          text={
            <div className={styles.cjBtn}>
              <span>Create account</span>
            </div>
          }
          bgColor="#3bdb80"
          style={{ color: '#ffffff', width: '70%', margin: '35px 0' }}
        />
        <div>
          <span>Already have an account?</span>
          <span
            onClick={() => {
              onClose();
              onLoginClick();
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
            Log in
          </span>
        </div>
      </div>
    </Modal>
  );
};

export default AccountModal;
