import React, { Component } from 'react'
import Card from './Card_Component/Card'
import SearchBar from './SearchBar_Component/SearchBar'
import './App.css'

export default class App extends Component {
    constructor() {
        super()

        this.state = {
            robots: [],
            searchField: '',
            isLoading: true
        }
    }

    componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/users').then(response => {
        return response.json()
      }).then(users => this.setState({robots: users, isLoading: false}))
    }

    updateSearchField = (updatedSearchField) => (
        this.setState({ searchField: updatedSearchField})
    )

  render() {
    const { robots, searchField, isLoading } = this.state
    const filteredRobots = robots.filter((robot) => (
        robot.name.toLowerCase().includes(searchField.toLowerCase())
    ))

    return (
      <div>
        <SearchBar onSearchChange={this.updateSearchField} />
        {isLoading ? <h2 className='loading'>Loading Robots</h2> : <Card robots={filteredRobots} />}
      </div>
    )
  }
}
