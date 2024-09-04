import {useModel} from '@umijs/max';
import {Card, theme, Typography} from 'antd';
import React from 'react';
import {Link} from "@@/exports";
// import {Link} from "@@/exports";
// import {useModel} from "@umijs/max";
// import GetGiftModal from "@/components/Gift/GetGift";
// import {getUserByInvitationCodeUsingPOST} from "@/services/qiApi-backend/userController";
import { background } from '@/../public/assets/doc_background.jpg';


const {Text, Title} = Typography;
/**
 * 每个单独的卡片，为了复用样式抽成了组件
 * @param param0
 * @returns
 */
const InfoCard: React.FC<{
  title: any
  index: number;
  desc: any;
  href: string;
}> = ({title, index, desc}) => {
  const {useToken} = theme;
  const {token} = useToken();
  return (
    <div
      style={{
        backgroundColor: token.colorBgContainer,
        boxShadow: token.boxShadow,
        borderRadius: '8px',
        fontSize: '14px',
        color: token.colorTextSecondary,
        lineHeight: '22px',
        padding: '16px 19px',
        minWidth: '220px',
        flex: 1,
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: '4px',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            width: 48,
            height: 48,
            lineHeight: '22px',
            backgroundSize: '100%',
            textAlign: 'center',
            padding: '8px 16px 16px 12px',
            color: '#FFF',
            fontWeight: 'bold',
            backgroundImage:
              "url('https://gw.alipayobjects.com/zos/bmw-prod/daaf8d50-8e6d-4251-905d-676a24ddfa12.svg')",
          }}
        >
          {index}
        </div>
        <div
          style={{
            fontSize: '16px',
            color: token.colorText,
            paddingBottom: 8,
          }}
        >
          {title}
        </div>
      </div>
      <div
        style={{
          fontSize: '14px',
          color: token.colorTextSecondary,
          textAlign: 'justify',
          lineHeight: '22px',
          marginBottom: 8,
        }}
      >
        {desc}
      </div>
      <br/>
    </div>
  );
};


const Welcome: React.FC = () => {
  const {token} = theme.useToken();
  const {initialState} = useModel('@@initialState');

  return (
    <>

      <Card
        style={{
          borderRadius: 8,
        }}
        bodyStyle={{
          backgroundImage:
            initialState?.settings?.navTheme === 'realDark'
              ? 'background-image: linear-gradient(75deg, #1A1B1F 0%, #191C1F 100%)'
              : 'background-image: linear-gradient(75deg, #FBFDFF 0%, #F5F7FF 100%)',
        }}
      >
        <div
          style={{
            backgroundPosition: '100% -30%',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '274px auto',
            backgroundImage:
              background,
          }}
        >
          <div
            style={{
              fontSize: '20px',
              color: token.colorTextHeading,
            }}
          >
            <Title level={2}> 欢迎使用 Wood-API 接口开放平台 🥳🥳🥳</Title>
          </div>
          <div
            style={{
              fontSize: '14px',
              color: token.colorTextSecondary,
              lineHeight: '22px',
              marginTop: 16,
              marginBottom: 32,
              width: '100%',
            }}
          >
            <Text strong>
              <Title level={3}>Wood-API 接口开放平台是一个为用户和开发者提供全面API接口调用服务的平台 🛠</Title>
              <Title level={4}>
                💁 我们为您提供了可供调取的
                <a href="https://github.com/wood-yang/Wood-API-sdk" target="_blank" rel="noreferrer">
                  客户端 SDK
                </a>
                ，
                通过注册账户即可获取所有接口的调用权限，让你获得更方便的体验
                <br/>
                🎁 作为用户您浏览和选择您喜欢的接口。并且进行在线调试，快速验证接口的功能和效果。
                <br/>
                🐣 您可以将自己的接口上传到 Wood-API 接口开放平台平台上，我们将在审核后为您上线接口。
                <br/>
                🐼 Wood-API 接口开放平台将一直致力于提供易用、可靠、高效的接口调用服务，给您更好的开发和调用体验。
              </Title>
            </Text>
          </div>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 16,
            }}
          >
            <InfoCard
              index={1}
              href="https://woodapi.wood-yang.cn"
              title={<Title level={5}>多样化的接口选择</Title>}
              desc={<Text
                strong>平台上提供多种多样的接口供您挑选，拓展了多个领域的功能和服务，旨在满足您的不同需求。</Text>}
            />
            <InfoCard
              index={2}
              href="https://woodapi.wood-yang.cn"
              title={<Title level={5}>在线调试功能</Title>}
              desc={<Text
                strong>您可以在平台上在线调试接口，快速验证接口的功能和效果，迅速了解接口的使用方式。</Text>}
            />
            <InfoCard
              index={3}
              href="https://woodapi.wood-yang.cn"
              title={<Title level={5}>客户端SDK支持</Title>}
              desc={<Text
                strong>为了方便开发者集成接口到自己的代码中，平台提供了客户端SDK，使调用接口变得更加便捷。
              </Text>}
            />
            <InfoCard
              index={4}
              href="https://woodapi.wood-yang.cn"
              title={<Title level={5}>易用和高效</Title>}
              desc={<Text
                strong>平台致力于提供易用和高效的接口调用服务，采用了多种技术手段，旨在提高您的使用体验。</Text>}
            />
          </div>
        </div>
      </Card>

    </>
  );
};

export default Welcome;
