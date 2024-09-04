import {GithubOutlined, WechatOutlined, ReadOutlined} from '@ant-design/icons';
import {DefaultFooter} from '@ant-design/pro-components';
import '@umijs/max';
import React from 'react';
import {Tooltip} from "antd";
import wechat from '@/../public/assets/WeChat.jpg';

const Footer: React.FC = () => {
  const defaultMessage = 'Wood工作室出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      // @ts-ignore
      copyright={<>
        {`${currentYear} ${defaultMessage}`} |{' '}
        <a target={'_blank'} href={"https://beian.miit.gov.cn/"} rel="noreferrer"> 蜀ICP备2024093424号-1</a>
      </>}
      links={[
        {
          key: 'blog',
          title:  (
            <Tooltip title="查看 Wood CSDN, 欢迎捏">
              <ReadOutlined/> CSDN
            </Tooltip>
          ),
          href: "https://blog.csdn.net/lubenwei_king?type=blog",
          blankTarget: true,
        },
        {
          key: 'github',
          title: (
            <Tooltip title="查看本站技术及源码，欢迎 star">
              <GithubOutlined/> Github
            </Tooltip>
          ),
          href: 'https://github.com/wood-yang/woodapi',
          blankTarget: true,
        },
        {
          key: 'contact',
          title: (
            <Tooltip title={<img src={wechat} alt="微信 code_nav" width="120"/>}>
            {/*<Tooltip title={<img alt="微信 code_nav" width="120"/>}>*/}
              <WechatOutlined/> 联系作者
            </Tooltip>
          ),
          href: 'https://img.qimuu.icu/typory/WeChat.jpg',
          blankTarget: true,
        },

      ]}
    />
  );
};
export default Footer;
