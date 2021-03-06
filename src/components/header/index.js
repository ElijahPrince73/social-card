import './header.css'
import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu} from 'antd';

const { Header } = Layout


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
          <Menu.Item key='2'><Link to='/'>Cards</Link></Menu.Item>

        </Menu>
      </div>
    </Header>
  )
}
export default Nav
