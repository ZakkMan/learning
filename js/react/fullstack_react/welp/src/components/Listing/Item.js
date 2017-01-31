import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'

// import Rating from 'components/Rating/Rating'
import styles from './styles.module.css'

export default class Item extends Component {
  render() {
    const { place } = this.props

    console.log( place )

    return(
      <div className={ styles.item }>
        <h1 className={ classnames(styles.title) }>
          { place.name }
        </h1>
        <span>{ place.rating / 5 }</span>
      </div>
    )
  }
}
