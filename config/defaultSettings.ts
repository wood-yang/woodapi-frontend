import { ProLayoutProps } from '@ant-design/pro-components';
import { whale } from '@/../public/whale.jpg'
/**
 * @name
 */
const Settings: ProLayoutProps & {
  pwa?: boolean;
  // logo?: string;
} = {
  navTheme: 'light',
  colorPrimary: '#1890ff',
  layout: 'top',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  pwa: true,
  logo: 'http://117.72.10.108:8888/down/Zlvdz7XU1Avw.png',
  token: {
    //https://procomponents.ant.design/components/layout#%E9%80%9A%E8%BF%87-token-%E4%BF%AE%E6%94%B9%E6%A0%B7%E5%BC%8F
  },
  splitMenus: false,
  siderMenuType: 'sub',
  colorWeak: false,
  title: 'Wood API',
  iconfontUrl: '',
};

export default Settings;
