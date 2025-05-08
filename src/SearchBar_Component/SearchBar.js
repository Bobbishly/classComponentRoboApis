import React, { Component } from 'react'
import './SearchBar.css'

export default class SearchBar extends Component {
  render() {
    return (
      <div className='search-container'>
        <h2 className='title'>RoboFriends</h2>
        <input 
            className='search-box' 
            type='search' 
            placeholder='Search Robots' 
            onChange={(event) => this.props.onSearchChange(event.target.value)}
        />
      </div>
    )
  }
}
