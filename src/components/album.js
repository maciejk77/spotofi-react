import React from 'react';

const Album = (props) => {
  debugger
  console.log(props);

  const { data } = props;
 
  return (  
    <div>
      <div>SOUNDTRACK: {data.category.attributes.term}</div>
      <div>ARTIST: {data['im:artist'].label}</div>
      <div>MUSIC: {data['im:contentType'].attributes.term}</div>
      <div>ALBUM: {data['im:contentType']['im:contentType'].attributes.term}</div>
      <div>IMAGE-SML: <img src={data['im:image'][0].label} /></div>
      <div>IMAGE-MDM: <img src={data['im:image'][1].label} /></div>
      <div>IMAGE-BIG: <img src={data['im:image'][2].label} /></div>
      <div>ITEM-COUNT?: {data['im:itemCount'].label}</div>
      <div>IM:NAME?: {data['im:name'].label}</div>
      <div>IM:PRICE?: {data['im:price'].attributes.amount} {data['im:price'].attributes.currency}</div>
      <div>RELEASE DATE: {data['im:releaseDate'].attributes.label}</div>
      <div>LINK: {data.link.attributes.href}</div>
      <div>TITLE: {data.title.label}</div>
      <div>-------------------------------------------------------------------------------------</div>
    </div>
  )
}

export default Album;

// props.data.feed.entry[0].title.label