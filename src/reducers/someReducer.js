export function CatFactsAndPicsReducer(state={
	fetching: false,
	data:[],
}, action){
	switch(action.type){
		case "RECEIVED_CAT_FACTS_AND_PICS":{
			return {...state,fetched:true,data:action.payload};	
		}
		case "RECEIVED_CAT_FACTS_AND_PICS_ERROR":{
		}	
	}
	return state;
}