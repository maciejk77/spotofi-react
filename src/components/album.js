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
                
        <thead className="thead">
          <tr className="tr">
            <td className="td">{data['im:name'].label}</td>
          </tr>
        </thead>


      </table>
      
      <table>
       
      
        {/* <thead className="thead">
          <tr className="tr">
            <td className="td">{data['im:name'].label}</td>
          </tr>
        </thead> */}

        <thead className="thead">
        <tr className="tr">
          <th className="th"><img src={data['im:image'][1].label} /></th>
          <td className="td">{data.category.attributes.term}</td>
          <td className="td">{data['im:artist'].label}</td>
        </tr>
      </thead>

      <thead className="thead">
        <tr className="tr">
          <td className="td">{data['im:releaseDate'].attributes.label}</td>
          <td className="td">{data['im:price'].attributes.amount} {data['im:price'].attributes.currency}</td>
        </tr>
      </thead>

    </table>

      {/* <div>Genre: {data.category.attributes.term}</div>
      <div>Artist: {data['im:artist'].label}</div> */}
      {/* <div>IMAGE: <img src={data['im:image'][1].label} /></div> */}
      {/* <div>Album Name: {data['im:name'].label}</div>
      <div>Price: {data['im:price'].attributes.amount} {data['im:price'].attributes.currency}</div>
      <div>Release Date: {data['im:releaseDate'].attributes.label}</div> */}
      <a href={data.link.attributes.href} target="_blank">LINK TO APPLE STORE</a>

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
