import React, { Component } from 'react';

import Search from 'react-search-box';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      data: [],
      loading: false
    };
  }

  componentDidMount() {
    this.setState({
      loading: true
    });

    fetch('https://api.github.com/search/repositories?q=topic:ruby+topic:rails')
    .then(res => res.json())
    .then(data => {
      this.setState({
        data: data.items,
        loading: false
      });
    })
  }

  handleChange(value) {
    console.log(value);
  }

  render() {
    return (
      <Search
        data={ this.state.data }
        onChange={ this.handleChange.bind(this) }
        placeholder="Search for a string..."
        class="search-class"
        searchKey="full_name"
      />
    );
  }
}