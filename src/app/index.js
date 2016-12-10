import React from 'react'
import { render } from 'react-dom'
import Header from './components/Header'
import Home from './components/Home'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      name: 'bobblog'
    }
  }
  onChangeBlogName (newname) {
    this.setState({
      name: newname
    })
  }
  render () {
    return (
      <div>
        <Header name={this.state.name} />
        <Home initialBlogs={4} changeName={this.onChangeBlogName.bind(this)} initialBlogName={this.state.name}>
          <h3>i am a child</h3>
        </Home>
      </div>
    )
  }
}

render(<App />, window.document.getElementById('app'))
