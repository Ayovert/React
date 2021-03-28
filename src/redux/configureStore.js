import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createForms } from 'react-redux-form';
import { Dishes } from './dishes';
import { Comments } from './comments';
import { Leaders } from './leaders';
import { Promotions } from './promotions';
import { Cards } from './cards'
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { InitialFeedback,InitialCard } from './forms';


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders,
            cards: Cards,
            ...createForms({
                feedback:InitialFeedback,
                card:InitialCard
            }),  

         }),
         applyMiddleware(thunk, logger)
    );
    return store;
}