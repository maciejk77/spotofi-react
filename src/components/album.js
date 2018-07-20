import React from 'react';
import '../styles/album.css';

const Album = (props) => {
  //debugger
  //console.log(props);

  const { data } = props;
 
  return ( 
    //if(!props) { return null } 
    <div className="album">
      
      <table>
        <tbody>
        
        <tr>
          <td>{data['im:name'].label}</td>
        </tr>
        
        <tr className="mid-box">
          <td><
            img src={data['im:image'][1].label} />
          </td>

          <td>
            <div>{data.category.attributes.term}</div> 
            <div>{data['im:artist'].label}</div>
          </td>

          <td>
            <div>{data['im:releaseDate'].attributes.label}</div> 
            <div>{data['im:price'].attributes.amount} {data['im:price'].attributes.currency}</div>
          </td>
        </tr>
        
        <tr>
          <td>
            <a href={data.link.attributes.href} target="_blank">LINK TO APPLE STORE</a>
          </td>
        </tr>
        
        </tbody>
      </table>

      {/* 
      
      USE the below data to map the into new object
      on which do Array.Some where values meet search criteria
      on TITLE, GENRE, ARTIST, RELEASE DATE

      USE filter to show only GENRE, ARTIST, YEAR results => dropdown?
        
    
    
      */}

      {/* <div>{data['im:name'].label}</div> */}
      {/* <div>{data.category.attributes.term}</div> */}
      {/* <div>{data['im:artist'].label}</div> */}
      {/* <div><img src={data['im:image'][1].label} /></div> */}
      {/* <div>{data['im:price'].attributes.amount} {data['im:price'].attributes.currency}</div>
      {/* <div>{data['im:releaseDate'].attributes.label}</div> */}
      {/* <a href={data.link.attributes.href} target="_blank">LINK TO APPLE STORE</a> */}
      {/* <div>MUSIC: {data['im:contentType'].attributes.term}</div> */}
      {/* <div>ALBUM: {data['im:contentType']['im:contentType'].attributes.term}</div> */}
      {/* <div>IMAGE-SML: <img src={data['im:image'][0].label} /></div> */}
      {/* <div>IMAGE-BIG: <img src={data['im:image'][2].label} /></div> */}
      {/* <div>ITEM-COUNT?: {data['im:itemCount'].label}</div> */}
      {/* <div>TITLE: {data.title.label}</div> */}
    </div>
  )
}

export default Album;
