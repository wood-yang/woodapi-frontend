import { Footer } from '@/components';
import {
  LockOutlined,
  UserOutlined,
} from '@ant-design/icons';
import {
  LoginForm,
  ProFormCheckbox,
  ProFormText, useIntl,
} from '@ant-design/pro-components';
import { history, useModel, Helmet } from '@umijs/max';
import { message, Tabs } from 'antd';
import React, { useState } from 'react';
import { createStyles } from 'antd-style';
import {userLoginUsingPost} from "@/services/woodapi-backend/userController";
import {flushSync} from "react-dom";
const useStyles = createStyles(({ token }) => {
  return {
    action: {
      marginLeft: '8px',
      color: 'rgba(0, 0, 0, 0.2)',
      fontSize: '24px',
      verticalAlign: 'middle',
      cursor: 'pointer',
      transition: 'color 0.3s',
      '&:hover': {
        color: token.colorPrimaryActive,
      },
    },
    lang: {
      width: 42,
      height: 42,
      lineHeight: '42px',
      position: 'fixed',
      right: 16,
      borderRadius: token.borderRadius,
      ':hover': {
        backgroundColor: token.colorBgTextHover,
      },
    },
    container: {
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      overflow: 'auto',
      backgroundImage:
        "url('https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/V-_oS6r-i7wAAAAAAAAAAAAAFl94AQBr')",
      backgroundSize: '100% 100%',
    },
  };
});
const Login: React.FC = () => {
  const [type, setType] = useState<string>('account');
  const { initialState, setInitialState } = useModel('@@initialState');
  const { styles } = useStyles();
  const intl = useIntl();

  const fetchUserInfo = async () => {
    const userInfo = await initialState?.fetchUserInfo?.();
    if (userInfo) {
      flushSync(() => {
        setInitialState((s) => ({
          ...s,
          currentUser: userInfo,
        }));
      });
    }
  };
  const handleSubmit = async (values: API.UserLoginRequest) => {
    try {
      // 登录
      const res = await userLoginUsingPost({
        ...values,
      });
      if (res.data) {
        const defaultLoginSuccessMessage = intl.getMessage('pages.login.success', '登录成功！');
        message.success(defaultLoginSuccessMessage);
        // setInitialState({
        //   ...initialState,
        //   currentUser: res.data
        // });
        await fetchUserInfo();
        // setTimeout解决2次登录跳转问题
        // setTimeout(()=>{
          const urlParams = new URL(window.location.href).searchParams;
          history.push(urlParams.get('redirect') || '/');
        // },100);
        // const urlParams = new URL(window.location.href).searchParams;
        // history.push(urlParams.get('redirect') || '/');
        return;
      }
      console.log(res);
    } catch (error) {
      const defaultLoginFailureMessage = intl.getMessage('pages.login.failure', '登录失败，请重试！'
      );
      console.log(error);
      message.error(defaultLoginFailureMessage);
    }
  }

  return (
    <div className={styles.container}>
      <Helmet>
        <title>
          {'Wood API 接口开放平台'}
        </title>
      </Helmet>
      <div
        style={{
          flex: '1',
          padding: '32px 0',
        }}
      >
        <LoginForm
          contentStyle={{
            minWidth: 280,
            maxWidth: '75vw',
          }}
          logo={<img alt="logo" src="/whale.jpg" />}
          title="Wood API"
          subTitle={'为您提供一个高效易用的接口开放平台'}
          initialValues={{
            autoLogin: true,
          }}
          onFinish={async (values) => {
            await handleSubmit(values as API.UserLoginRequest);
            // await handleSubmit(values as API.UserLoginRequest);
          }}
        >
          {/*<Tabs*/}
          {/*  activeKey={type}*/}
          {/*  onChange={setType}*/}
          {/*  centered*/}
          {/*  items={[*/}
          {/*    {*/}
          {/*      key: 'account',*/}
          {/*      label: '用户登录',*/}
          {/*    }*/}
          {/*  ]}*/}
          {/*/>*/}

          {type === 'account' && (
            <>
              <ProFormText
                name="userAccount"
                fieldProps={{
                  size: 'large',
                  prefix: <UserOutlined />,
                }}
                placeholder={'请输入用户名：root'}
                rules={[
                  {
                    required: true,
                    message: '用户名是必填项！',
                  },
                ]}
              />
              <ProFormText.Password
                name="userPassword"
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined />,
                }}
                placeholder={'请输入密码：1234'}
                rules={[
                  {
                    required: true,
                    message: '密码是必填项！',
                  },
                ]}
              />
            </>
          )}

          <div
            style={{
              marginBottom: 24,
            }}
          >
            <ProFormCheckbox noStyle name="autoLogin">
              自动登录
            </ProFormCheckbox>
            {/*<a*/}
            {/*  style={{*/}
            {/*    float: 'right',*/}
            {/*  }}*/}
            {/*>*/}
            {/*  忘记密码 ?*/}
            {/*</a>*/}
          </div>
        </LoginForm>
      </div>
      <Footer />
    </div>
  );
};
export default Login;
