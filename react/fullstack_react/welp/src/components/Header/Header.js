import React, { Component } from 'react'
import { Link } from 'react-router'

export class Header extends Component {

  render() {
    return (
      <div>
        <Link to="/"><h1>Welp</h1></Link>
        <section>
          Fullstack.io
        </section>
      </div>
    )
  }

}
