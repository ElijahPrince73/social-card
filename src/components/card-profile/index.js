import React, { Component } from 'react'
import { Card, Col, Row, Icon } from 'antd'

class CardView extends Component {
  render() {
    if (this.props) {
      console.log(this.props)
      return (
        <div>
          <Row type="flex" justify="space-around">
            {this.props.users.map(user => {
              return (
                <Col span={5} key={user.cell}>
                  <Card
                    hoverable
                    cover={<img src={user.picture.large} alt="image" />}
                    actions={[
                      <a href={user.email}>
                        <Icon type="inbox" />
                      </a>,
                      <a href={user.cell}>
                        <Icon type="phone" />
                      </a>,
                    ]}
                  >
                    <p>{user.name.first}</p>
                    <p>{user.name.last}</p>
                  </Card>
                </Col>
              )
            })}
          </Row>
        </div>
      )
    } else {
      return <div>Loading</div>
    }
  }
}

export default CardView
