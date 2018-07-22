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
          
        <div className="album__title">{obj.title}</div>
        
        <div className="album__image">      
          <div className="image">
            <div className="image__item">
              <img className="item" src={obj.image_bg} alt="" />
            </div>
          </div>
          
          <div className="album__data">
            <div className="data">
              <div className="data_item data_item--bold">{obj.genre}</div>
              <div className="data_item data_item--bold">{obj.artist}</div>
              <div className="data_item">{obj.released}</div>
            </div>
          </div>
        </div>
        
        <div className="album__link-price">
          <div><a href={obj.link} target="_blank">Go to Apple Store</a></div>
          <div>{obj.currency === "USD" ? '$' : null}{parseInt(obj.price, 10).toFixed()}</div>
        </div>
        
      </div>
    )
  }
}

export default Album;
