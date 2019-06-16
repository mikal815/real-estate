import React, { Component} from 'react'
import ReactDOM from 'react-dom'

class Layout extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Mike'
    }
  }
  clickedBtn = () => {
    console.log('working')
  }
  render () {
    return (
      <h1>
        Hola
      </h1>
    )
  }
}

const app = document.getElementById('app')

ReactDOM.render(<Layout />, app)
