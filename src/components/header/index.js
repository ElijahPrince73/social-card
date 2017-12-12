import './header.css'
import React from 'react';
import { Layout, Menu} from 'antd';

const { Header, Footer, Content} = Layout


const Nav = () => {
  return (
    <Header>
      <div className='logo'>
        <Menu
          theme='dark'
          mode='horizontal'
          defaultSelectedKeys={['2']}
          style={{lineHeight:'64px'}}
        >
          <Menu.Item key='1'>List Users</Menu.Item>
        </Menu>
      </div>
    </Header>
  )
}
export default Nav
