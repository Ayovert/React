import React, { Component } from 'react';
import {
    Card, CardImg, CardTitle, CardBody, CardText,
    Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody, Label, Row
} from 'reactstrap';
import { Control, Errors, LocalForm } from 'react-redux-form';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform, Fade, Stagger } from 'react-animation-components'

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);

function RenderDish({ dish }) {
    if (dish != null) {
        return (
            <div className="col-12 col-md-5 m-1">
                <FadeTransform in
                    transformProps={{
                        exitTransform: 'scale(0.5) translateY(-50%)'
                    }}>
                    <Card className="mt-2">
                        <CardImg src={baseUrl + dish.image} alt="{dish.name}" />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>
                                {dish.description}
                            </CardText>
                        </CardBody>

                    </Card>

                </FadeTransform>
            </div>


        );

    }
    else return (
        <div></div>
    );
}

function RenderComment({ comments, postComment, dishId }) {
    comments = Array.from(comments);
    if (comments != null) {
        return (
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                <ul className='list-unstyled'>
                    <Stagger in>


                        {comments.map((comment) => {
                            return (
                                <Fade in>
                                    <li key={comment.id}>
                                        {comment.comment}
                                        <p>-- {comment.author}, {" "},
                                        {new Intl.DateTimeFormat('en-US',
                                            { year: 'numeric', month: 'short', day: '2-digit' })
                                                .format(new Date(Date.parse(comment.date)))}</p>
                                    </li>
                                </Fade>
                            );

                        })}
                    </Stagger>

                    <Comment dishId={dishId} postComment={postComment} />
                </ul>

            </div>

        );

    }
    else return (
        <div></div>
    );
}
class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isCommentModalOpen: false
        };

        this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
        this.toggleCommentModal = this.toggleCommentModal.bind(this);

    }

    toggleCommentModal() {
        this.setState({
            isCommentModalOpen: !this.state.isCommentModalOpen

        });
    }

    handleCommentSubmit(values) {
        this.toggleCommentModal();
       
        this.props.postComment(this.props.dishId, values.rating, values.author, values.comment);
        alert(values.rating + " " + values.author);

    }

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="mt-6">
                        <Button outline onClick={this.toggleCommentModal}>
                            <span className="fa fa-pencil fa-lg"></span> Submit Comment
                    </Button>

                    </div>

                    <Modal isOpen={this.state.isCommentModalOpen} toggle={this.toggleCommentModal}>
                        <ModalHeader toggle={this.toggleCommentModal}>Submit Comment</ModalHeader>
                        <ModalBody>
                            <div className="col-12">
                                <LocalForm onSubmit={(values) => this.handleCommentSubmit(values)}>
                                    <Row className="form-group">
                                        <Label htmlFor="rating">Rating</Label>
                                        <Control.select model=".rating" name="rating"
                                            className="form-control">
                                            <option>...</option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </Control.select>
                                    </Row>

                                    <Row className="form-group">
                                        <Label htmlFor="author">Your Name</Label>
                                        <Control.text model=".author" id="author" name="author" placeholder="Your Name"
                                            className="form-control"
                                            validators={{
                                                required, minLength: minLength(3), maxLength: maxLength(15)
                                            }} />

                                        <Errors
                                            className="text-danger"
                                            model=".author"
                                            show="touched"
                                            messages={{
                                                required: 'Required ',
                                                minLength: 'Must be greater than 2 characters',
                                                maxLength: 'Must be 15 characters or less'

                                            }}
                                        />
                                    </Row>


                                    <Row className="form-group">
                                        <Label htmlFor="comment">Submit Comment</Label>
                                        <Control.textarea model=".comment" id="comment" name="comment" rows="5"
                                            className="form-control" />
                                    </Row>
                                    <Row className="form-group">
                                        <Button type="submit" color="primary">
                                            Submit
                                    </Button>
                                    </Row>
                                </LocalForm>

                            </div>

                        </ModalBody>

                    </Modal>

                </div>
            </React.Fragment>



        );
    }
}

const DishDetail = (props) => {

    if (props.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }

    else if (props.errMess) {
        return (
            <div className="container">
                <div className="row">
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        );
    }

    else if (props.dish != null)
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <div className="row">
                    <RenderDish dish={props.dish} />
                    <RenderComment comments={props.comments}
                        postComment={props.postComment}
                        dishId={props.dish.id} />
                </div>
            </div>

        );
    /*  else return (
          <div></div>
      );*/
}


export default DishDetail;




