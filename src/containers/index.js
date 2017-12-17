import React, { Component } from 'react'
import { connect } from 'react-redux'
import CardProfile from '../components/card-profile'
import { Icon } from 'antd';

import * as actions from '../actions'

class CardListContainer extends Component {
	componentWillMount() {
    this.props.getUsers()
  }
  render() {
    if (!this.props.users) {
    	return <div><Icon type="loading" /></div>
    }else {
    	return <CardProfile users={this.props.users} />
    }
  }
}

const mapStateToProps = state => {
  return { users: state.users }
}
export default connect(mapStateToProps, actions)(CardListContainer)
