import React, { Component } from 'react'
import { Card } from 'antd'
import { connect } from 'react-redux'

import * as actions from '../../actions'

const { Meta } = Card

class CardView extends Component {
  componentWillMount() {
    this.props.getUsers()
  }
  render() {
    return (
      <Card
        hoverable
        style={{ width: 240 }}
        cover={
          <img
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            alt="image"
          />
        }
      >
        <Meta title="Just something" description="Another thing" />
      </Card>
    )
 }
}

export default connect(null, actions)(CardView)
