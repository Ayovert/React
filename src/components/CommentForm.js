import React, { Component } from 'react';
import {Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron, 
Button, Modal, ModalHeader, ModalBody,Label, Row , Col } from 'reactstrap';
import { NavLink} from 'react-router-dom';
import { Control, Errors, LocalForm } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) =>(val) => !(val) || (val.length <= len);
const minLength = (len) =>(val) => (val) && (val.length >= len);


class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen

        });
    }

    handleSubmit(values){
        console.log("Current State is:" + JSON.stringify(values));
        alert("Current State is:" + JSON.stringify(values));
    }

    render() {
        return(
            <div className="container">
                <div className="mt-6"> 
                <Button outline onClick={this.toggleModal}>
                    <span className="fa fa-pencil fa-lg"></span> Submit Comment
                </Button>

                </div>
                
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                <ModalBody> 
                <div className="col-12">
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                        <Row className="form-group"> 
                            <Label htmlFor="rating">Rating</Label>
                            <Control.select model=".rating" name="rating" 
                                   className="form-control">
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
                                    required, minLength: minLength(3),maxLength: maxLength(15)
                                }} />

                                <Errors 
                                className="text-danger"
                                model=".author"
                                show="touched"
                                messages={{
                                    required:'Required ',
                                    minLength: 'Must be greater than 2 characters',
                                    maxLength: 'Must be 15 characters or less'

                                }}
                                />
                            </Row>
                            
                            
                            <Row className="form-group"> 
                            <Label htmlFor="comment">Submit Comment</Label>
                                <Control.textarea model=".comment" id="comment" name="comment" rows="12"
                                className="form-control"/>
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
            

        )
    }
} 
export default Comment;