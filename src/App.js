import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/search_bar';
// import AlbumList from './components/album_list';

const url = 'https://itunes.apple.com/us/rss/topalbums/limit=100/json';

class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      data: null,
    }
  }

  componentDidMount() {
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }
  
  render() {
    if(!this.state.data) { return null }
    return (
      <div style={{backgroundColor: '#3298ef'}}>
        <div className="logo"><img /></div>
        <SearchBar 
          data={this.state.data}
        />
      </div>
    );
  }
}

export default App;
