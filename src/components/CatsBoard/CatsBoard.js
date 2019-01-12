import React from "react";
import CatInfo from "../CatInfo/CatInfo";
import "./CatsBoard.css";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'
import { fetchCatPics,fetchCatFacts } from "../../actions/action";
class CatsBoard extends React.Component {

  constructor() {
    super();
    this.state={
      catPicData:{},
      catPicsPerRow:3,
    }
  }
  isEmpty = obj => {
        return Object.keys(obj).length === 0;
  }
  parsePicsAndFacts = (images,catFacts) => {
    const {catPicsPerRow} = this.state;
    /*
    const catImageURLS = images.reduce((imagesArray,image,index) => {
      if(index % catPicsPerRow ===0){
        imagesArray.push([]);
      }
      imagesArray[imagesArray.length-1].push(image.url[0]);
      return imagesArray;
    },[]);
    */
     const catPicsAndFacts = images.reduce((catPicsAndFacts, image, index) => {
      catPicsAndFacts.push({url: image.url[0],
                           fact: catFacts[index].fact });
      return catPicsAndFacts;
    },[]);
    return catPicsAndFacts;
  }
  render() {
    const {catPicData, catFacts, fetchCatPics, fetchCatFacts} = this.props;
    
    let catPicsAndFacts=[];
    if(this.isEmpty(catPicData)){
      fetchCatPics();
      fetchCatFacts();
    }
    else{
      catPicsAndFacts = this.parsePicsAndFacts(catPicData[0].images[0].image, catFacts);
    }
    //DEBUG STYLING
    //let catPicsAndFacts = [{"url":"https://25.media.tumblr.com/tumblr_m29y1ieQ5I1qjahcpo1_500.jpg","fact":"Cat families usually play best in even numbers. Cats and kittens should be aquired in pairs whenever possible."},{"url":"https://29.media.tumblr.com/tumblr_m127yf4HoI1qjahcpo1_500.jpg","fact":"When a cat chases its prey, it keeps its head level. Dogs and humans bob their heads up and down."},{"url":"https://24.media.tumblr.com/tumblr_m0hjcrusJt1qjahcpo1_500.jpg","fact":"A cat’s back is extremely flexible because it has up to 53 loosely fitting vertebrae. Humans only have 34."},{"url":"https://s3.us-west-2.amazonaws.com/cdn2.thecatapi.com/images/13m.gif","fact":"A cat can jump 5 times as high as it is tall."},{"url":"https://s3.us-west-2.amazonaws.com/cdn2.thecatapi.com/images/14k.gif","fact":"The first cat in space was a French cat named Felicette (a.k.a. “Astrocat”) In 1963, France blasted the cat into outer space. Electrodes implanted in her brains sent neurological signals back to Earth. She survived the trip."},{"url":"https://24.media.tumblr.com/ZabOTt2mpke385vwj4PI3Utvo1_500.jpg","fact":"Long, muscular hind legs enable snow leopards to leap seven times their own body length in a single bound."},{"url":"https://s3.us-west-2.amazonaws.com/cdn2.thecatapi.com/images/199.gif","fact":"Most cats give birth to a litter of between one and nine kittens. The largest known litter ever produced was 19 kittens, of which 15 survived."},{"url":"https://25.media.tumblr.com/tumblr_m1f9z2kf7Z1qzxrnuo1_500.jpg","fact":"When a family cat died in ancient Egypt, family members would mourn by shaving off their eyebrows. They also held elaborate funerals during which they drank wine and beat their breasts. The cat was embalmed with a sculpted wooden mask and the tiny mummy was placed in the family tomb or in a pet cemetery with tiny mummies of mice."},{"url":"https://30.media.tumblr.com/tumblr_lwkk55NnDO1qbhms5o1_500.jpg","fact":"The term “puss” is the root of the principal word for “cat” in the Romanian term pisica and the root of secondary words in Lithuanian (puz) and Low German puus. Some scholars suggest that “puss” could be imitative of the hissing sound used to get a cat’s attention. As a slang word for the female pudenda, it could be associated with the connotation of a cat being soft, warm, and fuzzy."},{"url":"https://30.media.tumblr.com/tumblr_lv94wm31ac1qfyzelo1_500.jpg","fact":"Cats are now Britain's favourite pet: there are 7.7 million cats as opposed to 6.6 million dogs."},{"url":"https://26.media.tumblr.com/Jjkybd3nSeirvnl1LbnzUtauo1_500.jpg","fact":"A cat can’t climb head first down a tree because every claw on a cat’s paw points the same way. To get down from a tree, a cat must back down."},{"url":"https://27.media.tumblr.com/tumblr_m1k4ttqFGk1r6b7kmo1_500.jpg","fact":"The lightest cat on record is a blue point Himalayan called Tinker Toy, who weighed 1 pound, 6 ounces (616 g). Tinker Toy was 2.75 inches (7 cm) tall and 7.5 inches (19 cm) long."},{"url":"https://24.media.tumblr.com/tumblr_m3jhrhnI1d1qhwmnpo1_500.jpg","fact":"Kittens remain with their mother till the age of 9 weeks."},{"url":"https://25.media.tumblr.com/tumblr_m3tm8n4NG91rtuomto1_500.jpg","fact":"The most traveled cat is Hamlet, who escaped from his carrier while on a flight. He hid for seven weeks behind a panel on the airplane. By the time he was discovered, he had traveled nearly 373,000 miles (600,000 km)."},{"url":"https://25.media.tumblr.com/tumblr_m02mqlRSqt1ql7d7ko1_500.jpg","fact":"It has been scientifically proven that stroking a cat can lower one's blood pressure."},{"url":"https://25.media.tumblr.com/tumblr_m3kg02GkLw1qjc1a7o1_500.jpg","fact":"The Ancient Egyptian word for cat was mau, which means \"to see\"."},{"url":"https://25.media.tumblr.com/tumblr_m31ex4sytg1qcnkx8o1_500.jpg","fact":"The ability of a cat to find its way home is called “psi-traveling.” Experts think cats either use the angle of the sunlight to find their way or that cats have magnetized cells in their brains that act as compasses."},{"url":"https://s3.us-west-2.amazonaws.com/cdn2.thecatapi.com/images/43m.gif","fact":"Siamese kittens are born white because of the heat inside the mother's uterus before birth. This heat keeps the kittens' hair from darkening on the points."},{"url":"https://s3.us-west-2.amazonaws.com/cdn2.thecatapi.com/images/497.gif","fact":"Many cats cannot properly digest cow's milk. Milk and milk products give them diarrhea."},{"url":"https://s3.us-west-2.amazonaws.com/cdn2.thecatapi.com/images/49s.gif","fact":"A cat will tremble or shiver when it is extreme pain."},{"url":"https://s3.us-west-2.amazonaws.com/cdn2.thecatapi.com/images/4c3.gif","fact":"Cats walk on their toes."},{"url":"https://s3.us-west-2.amazonaws.com/cdn2.thecatapi.com/images/4dm.gif","fact":"The first cat show was organized in 1871 in London. Cat shows later became a worldwide craze."},{"url":"https://s3.us-west-2.amazonaws.com/cdn2.thecatapi.com/images/4gf.gif","fact":"In Japan, cats are thought to have the power to turn into super spirits when they die. This may be because according to the Buddhist religion, the body of the cat is the temporary resting place of very spiritual people.i"},{"url":"https://s3.us-west-2.amazonaws.com/cdn2.thecatapi.com/images/4hc.gif","fact":"Isaac Newton invented the cat flap. Newton was experimenting in a pitch-black room. Spithead, one of his cats, kept opening the door and wrecking his experiment. The cat flap kept both Newton and Spithead happy."},{"url":"https://s3.us-west-2.amazonaws.com/cdn2.thecatapi.com/images/4i6.gif","fact":"A cat usually has about 12 whiskers on each side of its face."}];
  	return (
    <div className="grid">
    {
      /*
      catPicURLs.map((row) => {
        return <div className="grid">
        {
          row.map((url) => {
            return <CatInfo url={url}></CatInfo>
          })
        } </div>
      })
      */
    }
      {
        catPicsAndFacts.map((picsAndFacts) => {
            return <CatInfo url={picsAndFacts.url} fact={picsAndFacts.fact}></CatInfo>
          })
        }
     </div> 
    );
  }
}

const mapToStateProps = (state) => {
    return {
      catPicData: state.catPics.data,
      catFacts: state.catFacts.data
    };
  };

const mapDispatchToProps = dispatch => ({
  fetchCatPics: () => dispatch(fetchCatPics()),
  fetchCatFacts: () => dispatch(fetchCatFacts()),

});


export default connect(mapToStateProps,mapDispatchToProps)(CatsBoard);