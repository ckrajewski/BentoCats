import React from "react";
import "./CatInfo.css";
export default class CatInfo extends React.Component {
    
  render() {
    const {url, fact, favorite, viewOnlyIndex} = this.props;
    let favoriteStyling = favorite ? "selectedFavorite" : "unselectedFavorite";
    favoriteStyling = "favorite " + favoriteStyling;
    //letViewOnlyBackButton =null
    let ViewOnlyBackButton = null;
    if(viewOnlyIndex > -1){
      favoriteStyling="";
      ViewOnlyBackButton = <div className="backButton" onClick={this.props.backHomeHandler}>
                              <div className="leftArrow"> </div>
                              <div className="homeText"> Home </div>
                             </div>;
    }
  	return (
      <div className="imageBoarder" >
        <div className="catInfoGrid">
        {ViewOnlyBackButton}
          <div className="imageContainer">
            <div onClick={this.props.favoriteHandler} className={favoriteStyling}/>
            <img src={url} className="image" onClick={this.props.viewPicHandler} />
            <div className ="fact"> {fact} </div>
          </div>     
        </div>
     </div> 
    );
  }
}



