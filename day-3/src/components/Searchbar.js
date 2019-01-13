import React, { Component } from 'react';

export default class Searchbar extends Component {
  state = {
    search: ''
  };

  onChange = e => {
    this.setState({ search: e.target.value });
  };

  onSubmit = () => {
    fetch(`/getStudent/${this.state.search}`)
      .then(res => res.json())
      .then(data => this.props.searchCallback(data))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <span className="Searchbar">
        <input
          type="text"
          placeholder="Search"
          value={this.state.search}
          onChange={this.onChange}
        />
        <button type="submit" onClick={this.onSubmit}>
          Search
        </button>
      </span>
    );
  }
}
