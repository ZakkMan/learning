import React, { Component, PropTypes } from 'react'
import { Router } from 'react-router'

export default class App extends Component {
  static propTypes = {
    routes: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  get content() {
    return (<Router
        routes={this.props.routes}
        history={this.props.history} />)
  }

  render() {
    return (
      <div style={ { height: '100%' } }>
        {this.content}
      </div>
    )
  }

}