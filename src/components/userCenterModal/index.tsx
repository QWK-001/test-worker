import { ConfigProvider, Drawer } from 'antd';
import { createStyles, useTheme } from 'antd-style';
import type {
  DrawerClassNames,
  DrawerStyles,
} from 'antd/es/drawer/DrawerPanel';
import React from 'react';

const useStyle = createStyles(({ token }) => {
  console.log('token', token);

  return {
    'my-drawer-body': {
      background: '#000',
      color: '#ffffff',
    },
    'my-drawer-mask': {
      boxShadow: `inset 0 0 15px #fff`,
    },
    'my-drawer-header': {
      background: token.green1,
    },
    'my-drawer-footer': {
      color: token.colorPrimary,
    },
    'my-drawer-content': {
      borderLeft: '2px dotted #333',
    },
  };
});

interface DrawerComponentProps {
  title: string;
  placement?: 'left' | 'right' | 'top' | 'bottom';
  footer?: React.ReactNode;
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  classNames?: DrawerClassNames;
  styles?: DrawerStyles;
}

const DrawerComponent: React.FC<DrawerComponentProps> = ({
  title,
  placement = 'right',
  footer,
  open,
  onClose,
  children,
  classNames,
  styles,
}) => {
  return (
    <Drawer
      title={title}
      placement={placement}
      footer={footer}
      open={open}
      onClose={onClose}
      classNames={classNames}
      styles={styles}
    >
      {children}
    </Drawer>
  );
};

interface UserCenterModalProps {
  open: boolean;
  onClose: () => void;
}

const UserCenterModal: React.FC<UserCenterModalProps> = ({ open, onClose }) => {
  //   const [open, setOpen] = useState([false, false]);
  const { styles } = useStyle();
  const token = useTheme();

  //   const toggleDrawer = (idx: number, target: boolean) => {
  //     setOpen((p) => {
  //       p[idx] = target;
  //       return [...p];
  //     });
  //   };

  const classNames: DrawerClassNames = {
    body: styles['my-drawer-body'],
    mask: styles['my-drawer-mask'],
    header: styles['my-drawer-header'],
    footer: styles['my-drawer-footer'],
    content: styles['my-drawer-content'],
  };

  const drawerStyles: DrawerStyles = {
    mask: {
      //   backdropFilter: 'blur(10px)',
      background: 'none',
    },
    content: {
      boxShadow: '-10px 0 10px #666',
    },
    header: {
      borderBottom: `1px solid ${token.colorPrimary}`,
    },
    body: {
      fontSize: token.fontSizeLG,
    },
    footer: {
      borderTop: `1px solid ${token.colorBorder}`,
    },
  };

  return (
    <>
      <ConfigProvider
        drawer={{
          classNames,
          styles: drawerStyles,
        }}
      >
        <DrawerComponent title="" footer="" open={open} onClose={onClose}>
          <p>Some contents...</p>
        </DrawerComponent>
      </ConfigProvider>
    </>
  );
};

export default UserCenterModal;
