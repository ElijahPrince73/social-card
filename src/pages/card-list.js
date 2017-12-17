import React from 'react'
import { Layout } from 'antd'
import CardsListContainer from '../containers'
const { Content } = Layout
const Cards = () => {
  return (
    <Layout className="layout">
      <Content>
        <CardsListContainer />
      </Content>
    </Layout>
  )
}

export default Cards
