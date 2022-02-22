import {useState} from 'react'
import logo from './logo.svg';
import './App.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function App() {
  const  [collapsed,setCollapsed] = useState(false)
  return (
    <Layout style={{minHeight: '100vh'}}>
      <Sider collapsible collapsed={collapsed} onCollapse={(collapse) => {setCollapsed(collapse)}}>
        123
      </Sider>
      <Layout className='site-layout'>
        456
      </Layout>
    </Layout>
  );
}

export default App;