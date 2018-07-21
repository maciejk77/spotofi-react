import React, { Component } from 'react';
import Album from './album.js';
import '../styles/album_list.css';

class AlbumList extends Component {

  render_items() {
    if(!this.props.keyword) { return null }; 
    const data = this.props.data.feed.entry;
   
    return data.map(item =>
      <div key={item.id.attributes['im:id']}>
        <Album 
          data={item}
          keyword={this.props.keyword}
        />
      </div>
    )
  }

  render() {
    return (
      <div className="album_list">
        {this.render_items()}
      </div>
    )  
  }
}


export default AlbumList;