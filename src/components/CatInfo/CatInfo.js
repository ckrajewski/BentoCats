import React from "react";
import "./CatInfo.css";
export default class CatInfo extends React.Component {
    
  render() {
    const {url, fact, favorite, viewOnlyId} = this.props;
    let favoriteStyling = favorite ? "selectedFavorite" : "unselectedFavorite";
    favoriteStyling = "favorite " + favoriteStyling;
    let ViewOnlyBackButton = null;
    //if individual viewing, remove opacity and show BackButton
    const viewOnlyOpacityStyling = viewOnlyId > -1 ? {opacity:1, cursor:"default"} : {};
    if(viewOnlyId > -1){
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
          <div className="imageAndFactContainer" style={viewOnlyOpacityStyling}>
            <div onClick={this.props.favoriteHandler} className={favoriteStyling}/>
            <img src={url} className="image" onClick={this.props.viewPicHandler} />
            <div className ="fact"> {fact} </div>
          </div>     
        </div>
     </div> 
    );
  }
}



