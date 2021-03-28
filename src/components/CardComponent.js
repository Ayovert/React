import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Label, Col, Row } from 'reactstrap';
import { Control, Errors, Form, actions } from 'react-redux-form';
import { Link } from 'react-router-dom';


const required = (val) => val && val.length;
const maxLength = (len) =>(val) => !(val) || (val.length <= len);
const minLength = (len) =>(val) => (val) && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);


class RenderCards extends Component {
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Key</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.cards && this.props.cards.map(card => {
                        return <tr>
                            <td>{card.idNo}</td>
                            <td>{card.firstName}</td>
                            <td>{card.secretKey}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        );
    }
}

class CardComponent extends Component {
    constructor(props) {
        super(props);
      
      /*this.create = this.create.bind(this);
      this.update = this.update.bind(this);
      this.delete = this.delete.bind(this);*/
      this.handleChange = this.handleChange.bind(this);
    }
   /* componentDidMount() {
      // get all entities - GET
    }
    create(e) {
      // add entity - POST
      e.preventDefault();
      
    }
    update(e) {
      // update entity - PUT
      e.preventDefault();
    }
    delete(e) {
      // delete entity - DELETE
      e.preventDefault();
    }*/
    handleChange(values) {
        console.log("Current State is:" + JSON.stringify(values));
        this.props.postCard(this.props.cardId, values.amount, values.firstName, values.lastName, 
            values.email, values.nameOnCard, values.dob,values.idNo,
            values.idType, values.currency, values.isPhysicalCard, values.address, 
            values.stateId, values.localId, values.phoneNumber, values.secretKey);
        alert("Current State is:" + JSON.stringify(values));
        this.props.resetCard();
    }

    
    render() {
      return (
          
          <div className="container">
            <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Card</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Contact Us</h3>
                        <hr />
                    </div>                
                </div>
                <h1 className="display-4 text-center">Make An API Call in React</h1>
                <div><RenderCards/></div>
                  <legend className="text-center">Create Card</legend>
                  <div className="row row-content">
                  <div className="col-12 col-md-9">
                        <Form model='card' onSubmit={(values) => this.handleChange(values)}>
                        <Row className="form-group"> 
                            <Label htmlFor="amount" md={2}>Amount</Label>
                            <Col md={10}>
                                <Control.text model=".amount" id="amount" name="amount" placeholder="Amount" 
                                className="form-control"
                                validators={{
                                    required, minLength: minLength(3),maxLength: maxLength(15)
                                }} />
                                <Errors 
                                className="text-danger"
                                model=".amount"
                                show="touched"
                                messages={{
                                    required:'Required ',
                                    minLength: 'Must be greater than 2 characters',
                                    maxLength: 'Must be 15 characters or less'

                                }}
                                />
                                
                            </Col>
                            </Row>
                            <Row className="form-group"> 
                            <Label htmlFor="firstname" md={2}>First Name</Label>
                            <Col md={10}>
                                <Control.text model=".firstname" id="firstname" name="firstname" placeholder="First Name" 
                                className="form-control"
                                validators={{
                                    required, minLength: minLength(3),maxLength: maxLength(15)
                                }} />
                                <Errors 
                                className="text-danger"
                                model=".firstName"
                                show="touched"
                                messages={{
                                    required:'Required ',
                                    minLength: 'Must be greater than 2 characters',
                                    maxLength: 'Must be 15 characters or less'

                                }}
                                />
                                
                            </Col>
                            </Row>
                            <Row className="form-group"> 
                            <Label htmlFor="lastname" md={2}>Last Name</Label>
                            <Col md={10}>
                            <Control.text model=".lastname" name="lastname" placeholder="Last Name" 
                                className="form-control"
                                validators={{
                                    required, minLength: minLength(3),maxLength: maxLength(15)
                                }} />
                                <Errors 
                                className="text-danger"
                                model=".lastname"
                                show="touched"
                                messages={{
                                    required:'Required ',
                                    minLength: 'Must be greater than 2 characters',
                                    maxLength: 'Must be 15 characters or less'

                                }}
                                />
                                
                            </Col>
                            </Row>
                            <Row className="form-group"> 
                            <Label htmlFor="telnum" md={2}>Contact Tel.</Label>
                            <Col md={10}>
                            <Control.text model=".telnum" id="telnum" name="telnum" placeholder="Tel. Num" 
                                className="form-control"
                                validators={{
                                    required, minLength: minLength(3),maxLength: maxLength(15), isNumber
                                }} />
                                <Errors 
                                className="text-danger"
                                model=".telnum"
                                show="touched"
                                messages={{
                                    required:'Required ',
                                    minLength: 'Must be more than 2 numbers',
                                    maxLength: 'Must be 15 numbers or less',
                                    isNumber:'Must be a number'

                                }}
                                />
                                
                            </Col>
                            </Row>
                            <Row className="form-group"> 
                            <Label htmlFor="email" md={2}>Email</Label>
                            <Col md={10}>
                            <Control.text model=".email" id="email" name="email" placeholder="Email" 
                                className="form-control"
                                validators={{
                                    required, validEmail
                                }} />
                                <Errors 
                                className="text-danger"
                                model=".email"
                                show="touched"
                                messages={{
                                    required:'Required ',
                                    validEmail:'Invalid email address'

                                }}
                                />
                            </Col>
                            </Row>
                            <Row className="form-group"> 
                            <Label htmlFor="nameOnCard" md={2}>Name on Card</Label>
                            <Col md={10}>
                                <Control.text model=".nameOnCard" id="nameOnCard" name="nameOnCard" placeholder="nameOnCard" 
                                className="form-control"
                                validators={{
                                    required, minLength: minLength(3),maxLength: maxLength(15)
                                }} />
                                <Errors 
                                className="text-danger"
                                model=".nameOnCard"
                                show="touched"
                                messages={{
                                    required:'Required ',
                                    minLength: 'Must be greater than 2 characters',
                                    maxLength: 'Must be 15 characters or less'

                                }}
                                />
                                
                            </Col>
                            </Row>
                            <Row className="form-group"> 
                            <Label htmlFor="dob" md={2}>Date of Birth</Label>
                            <Col md={10}>
                                <Control.text model=".dob" id="dob" name="dob" placeholder="dob" 
                                className="form-control"
                                validators={{
                                    required, minLength: minLength(3),maxLength: maxLength(15)
                                }} />
                                <Errors 
                                className="text-danger"
                                model=".dob"
                                show="touched"
                                messages={{
                                    required:'Required ',
                                    minLength: 'Must be greater than 2 characters',
                                    maxLength: 'Must be 15 characters or less'

                                }}
                                />
                                
                            </Col>
                            </Row>
                            <Row className="form-group"> 
                            <Label htmlFor="idNo" md={2}>ID No.</Label>
                            <Col md={10}>
                                <Control.text model=".idNo" id="idNo" name="idNo" placeholder="idNo" 
                                className="form-control"
                                validators={{
                                    required, minLength: minLength(3),maxLength: maxLength(15)
                                }} />
                                <Errors 
                                className="text-danger"
                                model=".idNo"
                                show="touched"
                                messages={{
                                    required:'Required ',
                                    minLength: 'Must be greater than 2 characters',
                                    maxLength: 'Must be 15 characters or less'

                                }}
                                />
                                
                            </Col>

                            <Col md={{size:3, offset:1}}>
                                <Label htmlFor="idType" md={2}>ID type</Label>
                            <Control.select model=".contactType" name="contactType" 
                                   className="form-control">
                                   <option>1</option>
                                   <option>2</option>
                                   <option>3</option> 
                                   </Control.select>
                            </Col>
                            </Row>
                            <Row className="form-group"> 
                            <Label htmlFor="currency" md={2}>Currency</Label>
                            <Col md={10}>
                                <Control.text model=".currency" id="currency" name="currency" placeholder="Currency" 
                                className="form-control"
                                validators={{
                                    required, minLength: minLength(3),maxLength: maxLength(15)
                                }} />
                                <Errors 
                                className="text-danger"
                                model=".currency"
                                show="touched"
                                messages={{
                                    required:'Required ',
                                    minLength: 'Must be greater than 2 characters',
                                    maxLength: 'Must be 15 characters or less'

                                }}
                                />
                                
                            </Col>
                            </Row>
                            <Row className="form-group"> 
                            <Col md={{size:6, offset:2}}>
                                <div className="form-check">
                                <Label check>
                                    <Control.checkbox model=".isPhysicalCard" name="isPhysicalCard" 
                                    className="form-check-input"/>
                                     {' '} <strong>is  it a Physical Card?</strong>
                                     
                                </Label>
                                </div>
                            </Col>
                            </Row>
                            <Row className="form-group"> 
                            <Label htmlFor="address" md={2}>Address</Label>
                            <Col md={10}>
                                <Control.text model=".address" id="address" name="address" placeholder="Address" 
                                className="form-control"
                                 />
                                <Errors 
                                className="text-danger"
                                model=".address"
                                show="touched"
                                />
                                
                            </Col>
                            </Row>
                            <Row className="form-group"> 
                            <Label htmlFor="stateId" md={2}>State ID</Label>
                            <Col md={10}>
                                <Control.text model=".stateId" id="stateId" name="stateId" placeholder="stateId" 
                                className="form-control"
                                validators={{
                                    required, minLength: minLength(1),maxLength: maxLength(15)
                                }} />
                                <Errors 
                                className="text-danger"
                                model=".stateId"
                                show="touched"
                                messages={{
                                    required:'Required ',
                                    minLength: 'Must be greater than 0 characters',
                                    maxLength: 'Must be 15 characters or less'

                                }}
                                />
                                
                            </Col>
                            </Row>

                            <Row className="form-group"> 
                            <Label htmlFor="localId" md={2}>Local ID</Label>
                            <Col md={10}>
                                <Control.text model=".localId" id="localId" name="localId" placeholder="localId" 
                                className="form-control"
                                validators={{
                                    required, minLength: minLength(1),maxLength: maxLength(15)
                                }} />
                                <Errors 
                                className="text-danger"
                                model="localId"
                                show="touched"
                                messages={{
                                    required:'Required ',
                                    minLength: 'Must be greater than 0 characters',
                                    maxLength: 'Must be 15 characters or less'

                                }}
                                />
                                
                            </Col>
                            </Row>

                            <Row className="form-group"> 
                            <Label htmlFor="phoneNumber" md={2}>Phone Number</Label>
                            <Col md={10}>
                                <Control.text model=".phoneNumber" id="phoneNumber" name="phoneNumber" placeholder="Phone Number" 
                                className="form-control"
                                validators={{
                                    required, minLength: minLength(3),maxLength: maxLength(15)
                                }} />
                                <Errors 
                                className="text-danger"
                                model=".phoneNumber"
                                show="touched"
                                messages={{
                                    required:'Required ',
                                    minLength: 'Must be greater than 2 characters',
                                    maxLength: 'Must be 15 characters or less'

                                }}
                                />
                                
                            </Col>
                            </Row>

                            <Row className="form-group"> 
                            <Label htmlFor="secretKey" md={2}>Secret Key</Label>
                            <Col md={10}>
                                <Control.text model=".secretKey" id="secretKey" name="secretKey" placeholder="Secret Key" 
                                className="form-control"
                                validators={{
                                    required, minLength: minLength(3),maxLength: maxLength(15)
                                }} />
                                <Errors 
                                className="text-danger"
                                model=".secretKey"
                                show="touched"
                                messages={{
                                    required:'Required ',
                                    minLength: 'Must be greater than 2 characters',
                                    maxLength: 'Must be 15 characters or less'

                                }}
                                />
                                
                            </Col>
                            </Row>
                            <Row className="form-group"> 
                            <Col md={{size:10, offset:2}}>
                                <Button type="submit" color="primary">
                                    Create Card
                                </Button>
                            </Col>
                            </Row>
                        </Form>

                    </div>
                    </div>
              
          </div>
      );

      
    }
  }
  export default CardComponent;