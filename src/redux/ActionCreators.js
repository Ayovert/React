import * as ActionTypes from './ActionTypes';
import { baseUrl, walletUrl} from '../shared/baseUrl'; 

export const addComment = (comment) => ({
    type:ActionTypes.ADD_COMMENT,
    payload: comment

});

export const addFeedback = (feedback) => ({
    type:ActionTypes.ADD_FEEDBACK,
    payload: feedback

});

export const addCard = (card) => ({
    type:ActionTypes.ADD_CARD,
    payload: card

});



export const postComment = (dishId, rating, author, comment) => (dispatch) => {
    
    const newComment = {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }

    newComment.date = new Date().toISOString();

    return fetch(baseUrl + 'comments', {
        method: 'POST',
        body: JSON.stringify(newComment),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin'
    })
    .then(response => {
        if(response.ok){
            return response;
        }

        else{
           var error = new Error('Error ' + response.status + ' : ' + response.statusText);
           error.response = response;
           throw error;
        }
    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })

    .then(response => response.json())
    .then(response => dispatch(addComment(response)))
    .catch(error => {console.log('Post Comments', error.message);
alert('Your comment could not be posted \nError:' + error.message)});
};

export const postFeedback = (feedbackId, firstname,lastname,telnum,email,agree,contactType,message) =>
 (dispatch) => {
    
    const newFeedback = {
        feedbackId: feedbackId,
        firstname: firstname,
        lastname: lastname,
        telnum: telnum,
        email: email, 
        agree: agree, 
        contactType : contactType,
        message: message
    }

    newFeedback.date = new Date().toISOString();

    return fetch(baseUrl + 'feedback', {
        method: 'POST',
        body: JSON.stringify(newFeedback),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin'
    })
    .then(response => {
        if(response.ok){
            return response;
        }

        else{
           var error = new Error('Error ' + response.status + ' : ' + response.statusText);
           error.response = response;
           throw error;
        }
    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })

    .then(response => response.json())
    .then(response => dispatch(addFeedback(response)))
    .catch(error => {console.log('Post Feedback', error.message);
alert('Your Feedback could not be posted \nError:' + error.message)});
};


export const postCard = (cardId, amount,firstName,lastName, telNum, email,nameOnCard,dob,idNo,idType,currency, isPhysicalCard, address, stateId, localId, phoneNumber, secretKey) =>
 (dispatch) => {
    
    const newCard = {
        cardId: cardId,
        amount: amount,
firstName: firstName,
lastName: lastName,
telNum: telNum,
email: email,
nameOnCard: nameOnCard,
dob: dob,
idNo: idNo,
idType:idType,
currency: currency,
isPhysicalCard: isPhysicalCard,
address: address,
stateId: stateId,
localId: localId,
phoneNumber: phoneNumber,
secretKey: secretKey
    }

    newCard.date = new Date().toISOString();

    return fetch(walletUrl, {
        method: 'POST',
        body: JSON.stringify(newCard),
        headers:{
    "Authorization": "Bearer " + "4ka7vzvp7j9k",
    "Content-Type": "application/json",
    "accept": "application/json"
        },
        credentials: 'include'
    })
    .then(response => {
        if(response.ok){
            alert(console.log(response));
            return response;
        }

        else{
           var error = new Error('Error ' + response.status + ' : ' + response.statusText);
           error.response = response;
           throw error;
        }
    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })

    .then(response => response.json())
    .then(response => {
        (console.log(response));
      })
    .then(response => dispatch(addCard(response)))
    .catch(error => {console.log('Create Card', error.message);
alert('Your Card could not be posted \nError:' + error.message)});
};
//thunk to load and dishes

export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true));

    return fetch(baseUrl + 'dishes')
    .then(response => {
        if(response.ok){
            return response;
        }

        
        else{
           var error = new Error('Error ' + response.status + ' : ' + response.statusText);
           error.response = response;
           throw error;
        }
    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(response => response.json())
    .then(dishes => dispatch(addDishes(dishes)))
    .catch(error => dispatch(dishesFailed(error.message)));
}

export const dishesLoading = () => ({
    type:ActionTypes.DISHES_LOADING

});

export const dishesFailed = (errmess) => ({
    type:ActionTypes.DISHES_FAILED,
    payload: errmess

});

export const addDishes = (dishes) => ({
    type:ActionTypes.ADD_DISHES,
    payload: dishes
});

export const fetchComments = () => (dispatch) => {

    return fetch(baseUrl + 'comments')

    .then(response => {
        if(response.ok){
            return response;
        }

        else{
           var error = new Error('Error' + response.status + ':' + response.statusText);
           error.response = response;
           throw error;
        }
    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(response => response.json())
    .then(comments => dispatch(addComments(comments)))
    .catch(error => dispatch(commentsFailed(error.message)));
}

export const commentsFailed = (errmess) => ({
    type:ActionTypes.COMMENTS_FAILED,
    payload: errmess

});

export const addComments = (comments) => ({
    type:ActionTypes.ADD_COMMENTS,
    payload: comments
});


export const fetchPromos = () => (dispatch) => {
    dispatch(promosLoading(true));

    return fetch(baseUrl + 'promotions')

    .then(response => {
        if(response.ok){
            return response;
        }

        else{
           var error = new Error('Error' + response.status + ':' + response.statusText);
           error.response = response;
           throw error;
        }
    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(response => response.json())
    .then(promos => dispatch(addPromos(promos)))
    .catch(error => dispatch(promosFailed(error.message)));
}

export const promosLoading = () => ({
    type:ActionTypes.PROMOS_LOADING

});

export const promosFailed = (errmess) => ({
    type:ActionTypes.PROMOS_FAILED,
    payload: errmess

});

export const addPromos = (promos) => ({
    type:ActionTypes.ADD_PROMOS,
    payload: promos
});

export const fetchLeaders = () => (dispatch) => {
    dispatch(leadersLoading(true));

    return fetch(baseUrl + 'leaders')

    .then(response => {
        if(response.ok){
            return response;
        }

        else{
           var error = new Error('Error' + response.status + ':' + response.statusText);
           error.response = response;
           throw error;
        }
    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(response => response.json())
    .then(leaders => dispatch(addLeaders(leaders)))
    .catch(error => dispatch(leadersFailed(error.message)));
}

export const leadersLoading = () => ({
    type:ActionTypes.LEADERS_LOADING

});

export const leadersFailed = (errmess) => ({
    type:ActionTypes.LEADERS_FAILED,
    payload: errmess

});

export const addLeaders = (leaders) => ({
    type:ActionTypes.ADD_LEADERS,
    payload: leaders
});