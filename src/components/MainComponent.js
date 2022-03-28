import React, { Component } from 'react';
import Home from './HomeComponent';
import About from './AboutComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import DishDetail from './DishdetailComponent';
import CardComponent from './CardComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import CardComp from './CardComp';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { postComment, postFeedback, postCard, fetchDishes, fetchComments, fetchPromos, fetchLeaders } from '../redux/ActionCreators'
import { actions } from 'react-redux-form';
import { TransitionGroup, CSSTransition } from 'react-transition-group'


const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}

const mapDispatchToProps = (dispatch) => ({
  postComment: (dishId, rating, author, comment) => {dispatch(postComment(dishId, rating, author, comment))},
  postFeedback: (feedbackId, firstname,lastname,telnum,email,agree,contactType,message) => 
  {dispatch(postFeedback(feedbackId, firstname,lastname,telnum,email,agree,contactType,message))},

  postCard: (cardId, amount, firstName, lastName, telNum, email, nameOnCard, dob,idNo,
    idType, currency, isPhysicalCard, address, 
    stateId, localId, phoneNumber, secretKey) => 
    {dispatch(postCard(cardId, amount, firstName, lastName, telNum, email, nameOnCard, dob,idNo, idType, currency, isPhysicalCard, address, 
      stateId, localId, phoneNumber, secretKey))},

  fetchDishes: () => { dispatch(fetchDishes()) },
  fetchComments: () => { dispatch(fetchComments()) },
  fetchPromos: () => { dispatch(fetchPromos()) },
  fetchLeaders: () => { dispatch(fetchLeaders()) },
  resetFeedbackForm: () => { dispatch(actions.reset('feedback')) },
  resetCard: () => { dispatch(actions.reset('card')) }

});
class Main extends Component {

  componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
    this.props.fetchLeaders();
  }




  render() {

    const HomePage = () => {
      return (
        <Home dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
          dishesLoading={this.props.dishes.isLoading}
          dishesErrMess={this.props.dishes.errMess}
          promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
          promosLoading={this.props.promotions.isLoading}
          promosErrMess={this.props.promotions.errMess}
          leader={this.props.leaders.leaders.filter((leader) => leader.featured)[0]}
          leadersLoading={this.props.leaders.isLoading}
          leadersErrMess={this.props.leaders.errMess} />

      );
    }


    const DishWithId = ({ match }) => {
      return (
        <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish.id ===
          parseInt(match.params.dishId, 10))[0]}
          isLoading={this.props.dishes.isLoading}
          errMess={this.props.dishes.errMess}
          comments={this.props.comments.comments.filter((comment) => comment.dishId ===
            parseInt(match.params.dishId, 10))}
          commentsErrMess={this.props.comments.errMess}
          postComment={this.props.postComment} />

      );
    }



    return (
      <div>
        <Header />

        <TransitionGroup>
          <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
            <Switch>
              <Route path="/home" component={HomePage} />
              <Route exact path="/aboutus" component={() => <About leaders={this.props.leaders} />} />
              <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} />} />
              <Route exact path="/card" component={() => <CardComponent postCard={this.props.postCard}  resetCard={this.props.resetCard} />} />
              <Route path="/menu/:dishId" component={DishWithId} />
              <Route exact path="/contactus" component={() => <Contact postFeedback={this.props.postFeedback} resetFeedbackForm={this.props.resetFeedbackForm} />} />
              <Redirect to="/home" />
            </Switch>
          </CSSTransition>
        </TransitionGroup>

        <Footer />
      </div>
    );

  }

}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));


/*
 selectedDish: null
 onDishSelect(dishId) {
    this.setState({ selectedDish: dishId});
}
<Menu dishes={this.state.dishes}
onClick={(dishId) => this.onDishSelect(dishId)}/>
<DishDetail dish={this.state.dishes.filter((dish) =>dish.id === this.state.selectedDish)[0]} />*/