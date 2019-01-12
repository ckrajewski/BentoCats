import { combineReducers } from "redux"
import {CatFactsAndPicsReducer} from "./someReducer";

export default combineReducers({
	catFactsAndPics: CatFactsAndPicsReducer,

})