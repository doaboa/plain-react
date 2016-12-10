import React from 'react'

const Header = (props) => {
  return (
    <nav>
      <div className='nav-wrapper'>
        <a href='#' className='brand-logo'>Fohr Influencers</a>
        <ul id='nav-mobile' className='right hide-on-med-and-down'>
          <li><a href='#'>Leads</a></li>
          <li><a href='#'>Form</a></li>
          <li><a href='#'>About {props.name}</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Header

Header.propTypes = {
  name: React.PropTypes.string
}
