import React from 'react';

const Album = (props) => {
  //debugger
  console.log(props);

  const data = props.data.feed;
  return (  
    <div>
      <div>SOUNDTRACK: {data.entry[0].category.attributes.term}</div>
      <div>ARTIST: {data.entry[0]['im:artist'].label}</div>
      <div>MUSIC: {data.entry[0]['im:contentType'].attributes.term}</div>
      <div>ALBUM: {data.entry[0]['im:contentType']['im:contentType'].attributes.term}</div>
      <div>IMAGE-SML: <img src={data.entry[0]['im:image'][0].label} /></div>
      <div>IMAGE-MDM: <img src={data.entry[0]['im:image'][1].label} /></div>
      <div>IMAGE-BIG: <img src={data.entry[0]['im:image'][2].label} /></div>
      <div>ITEM-COUNT?: {data.entry[0]['im:itemCount'].label}</div>
      <div>IM:NAME?: {data.entry[0]['im:name'].label}</div>
      <div>IM:PRICE?: {data.entry[0]['im:price'].attributes.amount} {data.entry[0]['im:price'].attributes.currency}</div>
      <div>RELEASE DATE: {data.entry[0]['im:releaseDate'].attributes.label}</div>
      <div>LINK: {data.entry[0].link.attributes.href}</div>
      <div>TITLE: {data.entry[0].title.label}</div>
      <div>-------------------------------------------------------------------------------------</div>
    </div>
  )
}

export default Album;