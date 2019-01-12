import React from "react";
import "./CatInfo.css";
export default class CatInfo extends React.Component {
    
  render() {
    const {url, fact, favorite} = this.props;
    const styling = favorite ? "selectedFavorite" : "unselectedFavorite";
  	return (
    <div className="imageBoarder">
    <div className="catInfoGrid">
      <div className="imageContainer"><img src={url} className="image" />
      <div className ="fact"> {fact} </div>
      </div>
      <div onClick={this.props.favoriteHandler} className={"favorite " + styling }/>
      </div>
     </div> 
    );
  }
}



