import React from 'react';
import Album from './album.js';

const AlbumList = (props) => {  
  return props.data.feed.entry.map(item =>
    <div key={item.id.attributes['im:id']}>
      <Album 
        data={item}
        keyword={props.keyword}
      />
    </div>
  )
}

export default AlbumList;