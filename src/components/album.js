import React, { Component } from 'react';
import '../styles/album.css';

class Album extends Component {

  render() {
    const keyword = this.props.keyword.toLowerCase();

    const { data } = this.props;  
    // remaping of data to flat object - useful for searches
    let obj = {
      title: data['im:name'].label,
      full_title: data.title.label,
      genre: data.category.attributes.term,
      artist: data['im:artist'].label,
      image_sm: data['im:image'][0].label,
      image_md: data['im:image'][1].label,
      image_bg: data['im:image'][2].label,
      price: data['im:price'].attributes.amount,
      currency: data['im:price'].attributes.currency,
      released: data['im:releaseDate'].attributes.label,
      link: data.link.attributes.href,
      number: data['im:itemCount'].label,
      type1: data['im:contentType'].attributes.term,
      type2: data['im:contentType']['im:contentType'].attributes.term
    }
    // do not render component if there is no match for given keyword
    if(!obj.title.toLowerCase().includes(keyword)
        && !obj.genre.toLowerCase().includes(keyword)  
        && !obj.artist.toLowerCase().includes(keyword) 
        && !obj.released.toLowerCase().includes(keyword)                 
      ) { 
          return null 
        } 
    
  return (
      <div className="album">
        
        <table>
          <tbody>
          
          <tr>
            <td>{obj.title}</td>
          </tr>
          
          <tr className="mid-box">
            <td><
              img src={obj.image_md} />
            </td>

            <td>
              <div>{obj.genre}</div> 
              <div>{obj.artist}</div>
            </td>

            <td>
              <div>{obj.released}</div> 
              <div>{obj.price} {obj.currency}</div>
            </td>
          </tr>
          
          <tr>
            <td>
              <a href={obj.link} target="_blank">LINK TO APPLE STORE</a>
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
      </div>
    )
  }
}

export default Album;
