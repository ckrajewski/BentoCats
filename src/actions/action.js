import axios from "axios";

export function fetchCatFactsAndPics(){
	return function(dispatch) {
		axios.get('/api/fetchCatFactsAndPics')
		.then((response) => {
		  dispatch({type: "RECEIVED_CAT_FACTS_AND_PICS",payload:response.data})
		 })
		 .catch((err) =>{
		 	dispatch({type: "RECEIVED_CAT_FACTS_AND_PICS_ERROR",payload:err})
		 })
	}	
}


