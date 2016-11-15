import React { Component } from 'react'

export default class Objective extends Component {
  constructor( props ) {
    super( props )
    this.state = {
      isComplete: false,
      description: '',
      damage: ''
    }
  }

  componentDidMount() {

    const fetchIsHappenning = {
    method: 'GET', mode: 'cors', headers: new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
      })
    }

    fetch( `http://localhost:4001/books/${this.props.params.id}`, fetchIsHappenning )
      .then( data => data.json() )
      .then( data => {

          console.log(data.data[0].title)
          const book = data.data[0]
          this.setState({ title: book.title })
          this.setState({ author: book.author })
          this.setState({ price: book.price })

      })
  }

  render() {
    return (

    )
  }
}
