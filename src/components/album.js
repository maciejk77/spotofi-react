import React, { Component } from 'react';
import '../styles/album.css';

class Album extends Component {

  render() {

    const { data, keyword } = this.props;  
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
    // enables searches on title, genre, artist or date released
    // refactor to clearner some method?
    if(!obj.title.toLowerCase().includes(keyword.toLowerCase())
        && !obj.genre.toLowerCase().includes(keyword.toLowerCase())  
        && !obj.artist.toLowerCase().includes(keyword.toLowerCase()) 
        && !obj.released.toLowerCase().includes(keyword.toLowerCase())                 
      ) { return null } 

  return (
      <div className="album">
        <div className="wrapper">
          <div className="title_bar">{obj.title}</div>
          <div className="column_group">
            <div className="left_column">
              <div><img src={obj.image_md} /></div>
   
            </div>
            <div className="right_column">
              <div className="col_items">{obj.genre}</div>
              <div className="col_items">{obj.artist}</div>
              <div className="col_items">{obj.released}</div>
            </div>
          </div>
          <div className="link-price_bar">
            <div><a href={obj.link} target="_blank">Go to Apple Store</a></div>
            <div>{obj.currency === "USD" ? '$' : null}{parseInt(obj.price).toFixed(2)}</div>
          </div>
        </div>
        {/* <table className="al_table">
          <tbody className="al_tbody">
          
          <tr className="al_tr">
            <td className="al_td">{obj.title}</td>
          </tr>
          
          <tr className="mid-box">
            <td>
              <img src={obj.image_md} />
            </td>

            <td className="al_td">
              <div>{obj.genre}</div> 
              <div>{obj.artist}</div>
            </td>

            <td className="al_td">
              <div>{obj.released}</div> 
              <div>{obj.price} {obj.currency}</div>
            </td>
          </tr>
          
          <tr className="al_tr">
            <td className="al_td">
              <a href={obj.link} target="_blank">LINK TO APPLE STORE</a>
            </td>
          </tr>
          
          </tbody>
        </table> */}

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
