import React from 'react';
import Album from './album.js';

const AlbumList = (props) => {
  if(!props) { return null }
  return (
    <div>
      <Album data={props.data.feed.entry[0]}/>
    </div>
  )
}

export default AlbumList;