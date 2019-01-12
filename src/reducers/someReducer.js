export  function CatPicReducer(state={
	fetching: false,
	data:{}
}, action){
	switch(action.type){
		case "RECEIVED_CAT_PICS":{
			return {...state,fetched:true,data:action.payload};	
		}
		case "RECEIVED_CAT_PICS_ERROR":{
		}	
	}
	return state;
}
export function CatFactReducer(state={
	fetching: false,
	data:{}
}, action){
	switch(action.type){
		case "RECEIVED_CAT_FACTS":{
			return {...state,fetched:true,data:action.payload};	
		}
		case "RECEIVED_CAT_FACTS_ERROR":{
		}	
	}
	return state;
}

