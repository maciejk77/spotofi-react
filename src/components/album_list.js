import React from 'react';
import Album from './album.js';

const AlbumList = (props) => {
  //if(!props) { return null }
  //console.log(props.data.feed);
  return props.data.feed.entry.map(item =>
    <div key={item.id.attributes['im:id']}>
      <Album data={item}/>
    </div>
  )
}

export default AlbumList;