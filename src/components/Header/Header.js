import React from "react";
import Switch from "react-switch";
import "./Header.css";
export default class Header extends React.Component {
  
  render() {
    const marginRight={marginRight:"4%"};
    const {favoritesChecked, sortChecked, viewOnlyIndex } = this.props;
    let switches = <div className="flex switchesContainer">
                      <div style={marginRight}>
                        <div>Show Favorites</div>
                        <Switch  onChange={this.props.onFavoritesToggle} checked={favoritesChecked} />
                      </div>
                      <div>
                        <div>Sort By Last Word in Fact</div>
                        <Switch onChange={this.props.onSortToggle} checked={sortChecked} />
                      </div>
                    </div>
    if(viewOnlyIndex > -1){
      switches = null;
    }
  	return (
    <div className="headerBar">
      <div className="flex headerContainer">
          <div className="header"> Welcome to Cat Facts! </div>
          {switches}
        </div>
    </div> 
    );
  }
}



