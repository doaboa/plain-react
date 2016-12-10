import React from 'react'

class Tile extends React.Component {
  render () {
    return (
      <div className='row'>
        <div className='col s12 m5'>
          <div className='card-panel'>
            {this.props.children}
            <button onClick={this.props.remove}>remove</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Tile

Tile.propTypes = {
  children: React.PropTypes.element.isRequired,
  remove: React.PropTypes.func
}
