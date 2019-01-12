import { combineReducers } from "redux"
import {CatPicReducer, CatFactReducer} from "./someReducer";

export default combineReducers({
	catPics: CatPicReducer,
	catFacts: CatFactReducer,

})