import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'

import Item from './Item'
import styles from './styles.module.css'

export default class Listing extends Component {
  render() {

    console.log( this.props )

    return (
      <div className={ classnames(styles.container) }>
        {
          this.props.places.map(place => {
            return (
              <Item
                place={ place }
                onClick={ this.props.onClick }
                key={ place.id }/>
            )
          })
        }
      </div>
    )
  }
}
