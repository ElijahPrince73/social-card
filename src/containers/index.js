import React, { Component } from 'react'
import { connect } from 'react-redux'
import CardProfile from '../components/card-profile'

class CardListContainer extends Component {
  render() {
    return <CardProfile />
  }
}

const mapStateToProps = state => {
	console.log(state)
  // return { users: state.users }
}
export default connect(mapStateToProps)(CardListContainer)
