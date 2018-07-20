import React from 'react';
import Album from './album.js';

const AlbumList = (props) => {
  return (
    <div>
      <Album data={props.data}/>
    </div>
  )
}

export default AlbumList;