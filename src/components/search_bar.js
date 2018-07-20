import React, { Component } from 'react';
import '../styles/search_bar.css';

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
    console.log(this.props.data.feed.entry[0]);
    this.setState({ name: ''});
  }

  render() {
    return (
    <div>
      <form 
        className="form" 
        onSubmit={this.handle_submit}
      > 
        <input
          className="form__input" 
          type="text" 
          name="name"
          value={this.state.name} 
          onChange={this.handle_change}
        />
        <button 
          className="form__button" 
          type="submit">CHECK
        </button>        
      </form>
    </div>   
    )
  }
}

export default SearchBar;