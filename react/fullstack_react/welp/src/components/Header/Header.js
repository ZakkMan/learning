import React from 'react'
import { Link } from 'react-router'

import styles from './styles.module.css'

export default class Header extends React.Component {
  render() {
    return (
      <div className={ styles.topbar }>
        <Link to="/"><h1>Welp</h1></Link>
        <section>
          Fullstack.io
        </section>
      </div>
    )
  }
}
