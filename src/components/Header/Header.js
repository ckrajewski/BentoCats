import React from "react";
import Switch from "react-switch";
import "./Header.css";
export default class Header extends React.Component {
  render() {
    const {favoritesChecked, sortChecked} = this.props;
  	return (
    <div className="header">
    <Switch  onChange={this.props.onFavoritesToggle} checked={favoritesChecked} />
    <Switch onChange={this.props.onSortToggle} checked={sortChecked} />
     </div> 
    );
  }
}



