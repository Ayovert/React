import * as ActionTypes from './ActionTypes';
export const Cards = (state = {
       isLoading: true,
       errMess: null,
       cards: []    
}, action) => {
    switch(action.type) {
        case ActionTypes.ADD_CARDS:
            return {...state, isLoading:false, errMess: null, cards:action.payload };

        
        case ActionTypes.CARD_LOADING:
            return {...state, isLoading:true, errMess: null, cards:[] };

        case ActionTypes.CARD_FAILED:
            return {...state, isLoading:false, errMess: action.payload, cards:[] };

            case ActionTypes.ADD_CARD:
                var card = action.payload;
                return {...state, cards: state.cards.concat(card)}; 
            default:
                return state;
    }
}