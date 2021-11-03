import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardImg, CardTitle, CardText, CardLink, CardHeader, Media, Button, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { Fade, Stagger } from 'react-animation-components';


function CardComp() {
    return (
        <div className="container">
          
            <div className="row row-content">
               
                <div className="col-12 col-md-5">
                    <Card>
                        <CardHeader className="bg-primary text-white">Facts At a Glance</CardHeader>
                        <CardBody>
                            <dl className="row p-1">
                                <dt className="col-6">Started</dt>
                                <dd className="col-6">3 Feb. 2013</dd>
                                <dt className="col-6">Major Stake Holder</dt>
                                <dd className="col-6">HK Fine Foods Inc.</dd>
                                <dt className="col-6">Last Year's Turnover</dt>
                                <dd className="col-6">$1,250,375</dd>
                                <dt className="col-6">Employees</dt>
                                <dd className="col-6">40</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </div>
            </div >

            <div className="row row-content">
            <div className="col-12 col-md-5">
                <Card style={{ width: '18rem' }}>
                    <CardImg variant="top" src={baseUrl + 'images/vadonut.png'} className="p-1"/>
                    <CardBody>

                        <div style={{ display: 'flex', alignContent: 'center', justifyContent: 'center', marginBottom: 5 }}>
                            <img className=".img-responsive" alt="" src={baseUrl + 'images/vadonut.png'} width={80} height={80} />
                        </div>
                    </CardBody>
                    <CardBody>
                        <div style={{ display: 'flex', alignContent: 'center', justifyContent: 'center', marginBottom: 5 }}>
                            <Button variant="primary">Go somewhere</Button>
                        </div>
                    </CardBody>
                </Card>

            </div>
            </div>
        </div>
    );
}

export default CardComp;