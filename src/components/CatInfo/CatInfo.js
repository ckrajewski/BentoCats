import React from "react";
export default class CatInfo extends React.Component {
    
  render() {
    const {url, fact} = this.props;
  	return (
    <div>
      <img src={url} />
      <div> {fact} </div>
     </div> 
    );
  }
}



