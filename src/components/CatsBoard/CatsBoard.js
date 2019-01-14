import React from "react";
import CatInfo from "../CatInfo/CatInfo";
import Header from "../Header/Header";
import "./CatsBoard.css";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'
import { fetchCatFactsAndPics } from "../../actions/action";

class CatsBoard extends React.Component {


    constructor() {
        super();
        this.state = {
            showFavorites: false,
            catFactsAndPics: [],
            sortChecked: false,
            sortedCatFactsAndPics: [],
            viewOnlyId: -1,
        }
    }
    // On inital load, fetch data
    componentWillMount() {
        const {fetchCatFactsAndPics, catFactsAndPicsProps} = this.props;
        fetchCatFactsAndPics();
    }
    //method for sorting cats by last word in fact
    sort = () => {
        const { catFactsAndPics, sortedCatFactsAndPics } = this.state;
        if(sortedCatFactsAndPics.length === catFactsAndPics.length){
          return sortedCatFactsAndPics;
        }
        let catFactsAndPicsCopy = [...catFactsAndPics];
        catFactsAndPicsCopy = catFactsAndPicsCopy.sort((a, b) => {
            const  firstWord = a.fact.split(" ").slice(-1)[0].toLowerCase();
            const  secondWord  = b.fact.split(" ").slice(-1)[0].toLowerCase();
            return firstWord < secondWord ? -1 : firstWord > secondWord ? 1 : 0;
        });
        return catFactsAndPicsCopy;

    }
    /*
      handle favorite selection
      need to toggle favorite for both sorted and unsorted list
    */
    handleFavorite = (event, id) => {
        event.stopPropagation();
        const { catFactsAndPics, sortedCatFactsAndPics, showFavorites, sortChecked } = this.state;
        let newCatFactsAndPics = [...catFactsAndPics];
        let newSortedCatFactsAndPics = [...sortedCatFactsAndPics];
        const newCatFactsAndPicsIndex = this.findIndex(newCatFactsAndPics,id);
        const newSortedCatFactsAndPicsIndex = this.findIndex(newSortedCatFactsAndPics,id);
        const toggleOnFavorite = newCatFactsAndPics[newCatFactsAndPicsIndex].favorite;
        newCatFactsAndPics[newCatFactsAndPicsIndex].favorite = !toggleOnFavorite;
        if(newSortedCatFactsAndPicsIndex > -1){
            newSortedCatFactsAndPics[newSortedCatFactsAndPicsIndex].favorite = !toggleOnFavorite;
        }
        this.setState({ catFactsAndPics: newCatFactsAndPics, sortedCatFactsAndPics: newSortedCatFactsAndPics});
    }
    /*
      filter favorites for given list
    */
    filterFavoriteCatFactsAndPics = (catFactsAndPicsList) => {
        const favoriteCatFactsAndPics = catFactsAndPicsList.filter((catPicAndFact) => catPicAndFact.favorite);
        return favoriteCatFactsAndPics;
    }
    /*
      toggle favorites
    */
    handleFavoriteToggle = () => {
        this.setState(({ showFavorites }) => ({ showFavorites: !showFavorites }));
    }
    /*
      toggle sort
    */
    handleSortToggle = () => {
        const thisSortedCatFactsAndPics = this.sort();
        this.setState(({ sortChecked, sortedCatFactsAndPics }) => ({ sortChecked: !sortChecked, sortedCatFactsAndPics:thisSortedCatFactsAndPics}));
    }
    /*
      grab id for viewing individual picture and handler
    */
    viewPicHandler = (event,id) => {
      event.stopPropagation();
      this.setState({viewOnlyId: id});
    }
    /*
      go back to main page
    */
    backHomeHandler = (event) => {
      this.viewPicHandler(event, -1);
    }
    /*
      find index of given sorted and original list
    */
    findIndex = ( listofCatPicsAndFacts, id) => {
      const catPicAndFactIndex = listofCatPicsAndFacts.findIndex((catPicAndFact) => {
        return catPicAndFact.id === id;
      });
      return catPicAndFactIndex;
    }
    
    render() {
        const { showFavorites, catFactsAndPics, sortChecked, sortedCatFactsAndPics, viewOnlyId } = this.state;
        const { catFacts, catFactsAndPicsProps, fetchCatPics} = this.props;
        /*
          initially, map props (fetched data) back to a state value. This is so
          that eventually, we can add infinite scrolling support (fetch new data and add to state)
        */
        if(catFactsAndPicsProps.length > 0 && catFactsAndPics.length === 0) {
          this.setState({ catFactsAndPics: catFactsAndPicsProps });
        }
        //default to standard list values
        let catFactsAndPicsList = catFactsAndPics;

        /* 
           Now, check which options are toggled, and return appropriate list of cat
           facts and picsAndFacts
        */

        //if sorting, get sorted list
        if(sortChecked) {
          catFactsAndPicsList = sortedCatFactsAndPics;
        }
        //if favorites is toggled, get filtered list
        if (showFavorites) {
            catFactsAndPicsList = this.filterFavoriteCatFactsAndPics(catFactsAndPicsList);
        }
        /*
          ViewOnlyIndex is a property that refers to when a user
          wants to view a single picture and fact. If -1, it means that we're
          at the home page. Otherwise, get the index and redirect the user to
          that picture and fact
        */
        if(viewOnlyId>-1){
          catFactsAndPicsList=[catFactsAndPicsList[this.findIndex(catFactsAndPicsList,viewOnlyId)]];
        }
        return (
            <div>
              <Header onFavoritesToggle={this.handleFavoriteToggle} favoritesChecked={showFavorites} onSortToggle={this.handleSortToggle} sortChecked={sortChecked} viewOnlyId={viewOnlyId} />
              <div className="grid">
              {
                catFactsAndPicsList.map((picsAndFacts,index) => {
                  return <CatInfo url={picsAndFacts.url} fact={picsAndFacts.fact} favoriteHandler={(event) =>{this.handleFavorite(event, picsAndFacts.id)}} favorite={picsAndFacts.favorite} viewPicHandler={(event) => this.viewPicHandler(event, picsAndFacts.id)} viewOnlyId={viewOnlyId} backHomeHandler={(event) => this.backHomeHandler(event)}></CatInfo>
                })
              }
              </div> 
            </div>
        );
    }
}

const mapToStateProps = (state) => {
    return {
        catFactsAndPicsProps: state.catFactsAndPics.data
    };
};

const mapDispatchToProps = dispatch => ({
    fetchCatFactsAndPics: () => dispatch(fetchCatFactsAndPics()),
});

export default connect(mapToStateProps, mapDispatchToProps)(CatsBoard);