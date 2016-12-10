import React, { Component } from 'react'
import Tile from '../components/Tile'

class Home extends Component {
  constructor (props) {
    super()
    this.state = {
      blogs: props.initialBlogs,
      name: props.initialBlogName,
      tileMounted: true
    }
  }
  onMoarBlogs () {
    this.setState({
      blogs: this.state.blogs + 3
    })
  }
  removeCard () {
    console.log('remove')
  }
  changeName () {
    this.props.changeName(this.state.name)
  }
  onHandleInput (event) {
    this.setState({
      name: event.target.value
    })
  }
  onChangeTileMounted () {
    this.setState({
      tileMounted: !this.state.tileMounted
    })
  }
  render () {
    let tileComponent = ''
    if (this.state.tileMounted) {
      tileComponent = <Tile remove={this.removeCard.bind(this)}>
                <p>Name of first thing</p>
              </Tile>
    }
    return (
      <div>
        <h1>gr8 blog: {this.state.blogs}</h1>
        {this.props.children}
        <button onClick={this.onMoarBlogs.bind(this)}>moar blogs</button>
        { tileComponent }
        <button onClick={this.onChangeTileMounted.bind(this)}>Toggle Tile</button>
        <Tile remove={this.removeCard.bind(this)}>
          <p>Name of first thing</p>
        </Tile>
        <input value={this.state.name} onChange={(event) => this.onHandleInput(event)} />
        <button onClick={this.changeName.bind(this)}>change blog name</button>
      </div>
    )
  }
}

export default Home

Home.propTypes = {
  initialBlogs: React.PropTypes.number,
  children: React.PropTypes.element.isRequired,
  changeName: React.PropTypes.func,
  initialBlogName: React.PropTypes.string
}
