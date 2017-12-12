import React, { Component } from 'react';
import { Layout } from 'antd';
import Header from './header';

const {Content} = Layout

class App extends Component {
  render() {
    return (
      <div>
        <Layout className='layout'>
          <Header/>
          <Content>
            {this.props.children}
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
