import React, { Component } from 'react'

export class BookItems extends Component {
  render() {
    const {title,content} = this.props
    return (
      <div>
          <h2>{title}</h2>
          <p dangerouslySetInnerHTML={{__html:content}}></p>
      </div>
    )
  }
}

export default BookItems