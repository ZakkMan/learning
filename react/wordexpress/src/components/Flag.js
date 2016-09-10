import React from 'react'
import flags from '../data/flags'

export default class Flag extends React.Component {
  render() {
    const name = flags[this.props.code].name;
    const icon = flags[this.props.code].icon;
    
    return (
      <span className="flag">
        <img className="icon" title={name} src={`/img/${icon}`}/>
        {this.props.showName && <span className="name"> {name}</span>}
      </span>
    );
  }
}
