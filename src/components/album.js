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
        <div className="album_wrapper">
          
          <div className="top_bar">{obj.title}</div>
          
          <div className="mid_content_box">
            <div className="left_column">
              <div className="img_wrapper">
                <img className="img" src={obj.image_bg} />
              </div>
            </div>
            
            <div className="right_column">
              <div className="col_group">
                <div className="col_item col_item_bold">{obj.genre}</div>
                <div className="col_item col_item_bold">{obj.artist}</div>
                <div className="col_item">{obj.released}</div>
              </div>
            </div>
          </div>
          
          <div className="bottom_bar">
            <div><a href={obj.link} target="_blank">Go to Apple Store</a></div>
            <div>{obj.currency === "USD" ? '$' : null}{parseInt(obj.price).toFixed()}</div>
          </div>
        
        </div>
      </div>
    )
  }
}

export default Album;
