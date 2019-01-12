import axios from "axios";

export function fetchCatPics(){
	return function(dispatch) {
		axios.get('/api/fetchCatPics')
		.then((response) => {
		  dispatch({type: "RECEIVED_CAT_PICS",payload:response.data})
		 })
		 .catch((err) =>{
		 	dispatch({type: "RECEIVED_CAT_PICS_ERROR",payload:err})
		 })
	}	
}

export function fetchCatFacts(){
	return function(dispatch) {
		axios.get('/api/fetchCatFacts')
		.then((response) => {
		  dispatch({type: "RECEIVED_CAT_FACTS",payload:response.data})
		 })
		 .catch((err) =>{
		 	dispatch({type: "RECEIVED_CAT_FACTS_ERROR",payload:err})
		 })
	}	
}


