import React from 'react';

const Album = (props) => {
  //debugger
  console.log(props);
  return (
    <div>
      <div>SOUNDTRACK: {props.data.feed.entry[0].category.attributes.term}</div>
      <div>SOUNDTRACK: {props.data.feed.entry[0].category.attributes.term}</div>
      <div>SOUNDTRACK: {props.data.feed.entry[0].category.attributes.term}</div>
      <div>SOUNDTRACK: {props.data.feed.entry[0].category.attributes.term}</div>
      <div>SOUNDTRACK: {props.data.feed.entry[0].category.attributes.term}</div>
      <div>SOUNDTRACK: {props.data.feed.entry[0].category.attributes.term}</div>
      <div>SOUNDTRACK: {props.data.feed.entry[0].category.attributes.term}</div>
    </div>
  )
}

export default Album;