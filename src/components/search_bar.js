import React, { Component } from 'react';
import '../styles/search_bar.css';
import AlbumList from './album_list.js';
import { Glyphicon } from 'react-bootstrap';

class SearchBar extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      name: ''
    }
    this.handle_submit = this.handle_submit.bind(this);
    this.handle_change = this.handle_change.bind(this);
  }
  
  handle_change(event) {
    this.setState({ name: event.target.value });
  }

  handle_submit(event) {
    event.preventDefault();
    this.setState({ name: ''});
  }

  render() {
    return (
    <div>
    <div style={{backgroundColor: '#3298ef'}}>
      <form 
        className="form" 
        onSubmit={this.handle_submit}
      >
        <Glyphicon glyph="search" className="search_glyphicon" />
        <input
          autoComplete="off"
          className="form__input" 
          type="text" 
          name="name"
          value={this.state.name} 
          onChange={this.handle_change}
        />
      </form>
    </div> 
    <AlbumList 
      data={this.props.data} 
      keyword={this.state.name}
    />
    </div>  
    )
  }
}

export default SearchBar;