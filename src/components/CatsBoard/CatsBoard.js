import React from "react";
import CatInfo from "../CatInfo/CatInfo";
import "./CatsBoard.css";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'
import { fetchCatFactsAndPics } from "../../actions/action";
class CatsBoard extends React.Component {

  constructor() {
    super();
    this.state={
      catPicData:{},
      catPicsPerRow:3,
    }
  }

  render() {
    const {catPicData, catFacts, catFactsAndPics, fetchCatPics, fetchCatFacts,fetchCatFactsAndPics} = this.props;
    
    //DEBUG STYLING
    /*
    let catFactsAndPics = [
    {"url":"https://25.media.tumblr.com/tumblr_m29y1ieQ5I1qjahcpo1_500.jpg","fact":"Cat families usually play best in even numbers. Cats and kittens should be aquired in pairs whenever possible."},
    {"url":"https://29.media.tumblr.com/tumblr_m127yf4HoI1qjahcpo1_500.jpg","fact":"When a cat chases its prey, it keeps its head level. Dogs and humans bob their heads up and down."},
    {"url":"https://24.media.tumblr.com/tumblr_m0hjcrusJt1qjahcpo1_500.jpg","fact":"A cat’s back is extremely flexible because it has up to 53 loosely fitting vertebrae. Humans only have 34."},
    {"url":"https://s3.us-west-2.amazonaws.com/cdn2.thecatapi.com/images/13m.gif","fact":"A cat can jump 5 times as high as it is tall."},
    {"url":"https://s3.us-west-2.amazonaws.com/cdn2.thecatapi.com/images/14k.gif","fact":"The first cat in space was a French cat named Felicette (a.k.a. “Astrocat”) In 1963, France blasted the cat into outer space. Electrodes implanted in her brains sent neurological signals back to Earth. She survived the trip."},
    {"url":"https://24.media.tumblr.com/ZabOTt2mpke385vwj4PI3Utvo1_500.jpg","fact":"Long, muscular hind legs enable snow leopards to leap seven times their own body length in a single bound."},{"url":"https://s3.us-west-2.amazonaws.com/cdn2.thecatapi.com/images/199.gif","fact":"Most cats give birth to a litter of between one and nine kittens. The largest known litter ever produced was 19 kittens, of which 15 survived."},
    {"url":"https://25.media.tumblr.com/tumblr_m1f9z2kf7Z1qzxrnuo1_500.jpg","fact":"When a family cat died in ancient Egypt, family members would mourn by shaving off their eyebrows. They also held elaborate funerals during which they drank wine and beat their breasts. The cat was embalmed with a sculpted wooden mask and the tiny mummy was placed in the family tomb or in a pet cemetery with tiny mummies of mice."},
    {"url":"https://30.media.tumblr.com/tumblr_lwkk55NnDO1qbhms5o1_500.jpg","fact":"The term “puss” is the root of the principal word for “cat” in the Romanian term pisica and the root of secondary words in Lithuanian (puz) and Low German puus. Some scholars suggest that “puss” could be imitative of the hissing sound used to get a cat’s attention. As a slang word for the female pudenda, it could be associated with the connotation of a cat being soft, warm, and fuzzy."},
    {"url":"https://30.media.tumblr.com/tumblr_lv94wm31ac1qfyzelo1_500.jpg","fact":"Cats are now Britain's favourite pet: there are 7.7 million cats as opposed to 6.6 million dogs."}
    ];
    */
    if(catFactsAndPics.length === 0){
     fetchCatFactsAndPics();
    }
  	return (
    <div className="grid">
      {
        catFactsAndPics.map((picsAndFacts) => {
            return <CatInfo url={picsAndFacts.url} fact={picsAndFacts.fact}></CatInfo>
          })
        }
     </div> 
    );
  }
}

const mapToStateProps = (state) => {
    return {
      catFactsAndPics: state.catFactsAndPics.data
    };
  };

const mapDispatchToProps = dispatch => ({
  fetchCatFactsAndPics: () => dispatch(fetchCatFactsAndPics()),
});

export default connect(mapToStateProps,mapDispatchToProps)(CatsBoard);