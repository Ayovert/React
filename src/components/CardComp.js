import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardImg, CardTitle, CardText, CardLink, CardHeader, Media, Button, ListGroup, ListGroupItem } from 'reactstrap';

import { baseUrl } from '../shared/baseUrl';






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
                    <Card>
                        <CardImg variant="top" src={baseUrl + 'images/vadonut.png'} className="p-1"
                        />
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


            <div class="row">
    <div class="col-xs-6 col-md-4">
      <div class="card">
        <div class="wrapper">
          <img class="card-img-top img-fluid" src="//placehold.it/760x270" alt="Card image cap" alt=""/>
        </div>
        <h4 class="card-title">Title</h4>
        <div class="card-body">
          <p class="card-text">Some quick example text to build on </p>
          10 mins ago <div class="float-right"><i class="fa fa-comment-o" aria-hidden="true"></i> 0</div>
        </div>
      </div>
    </div>
    <div class="col-xs-6 col-md-4">
      <div class="card">
        <div class="wrapper">
          <img class="card-img-top img-fluid" src="//placehold.it/760x500" alt="Card image cap" alt= ""/>
        </div>
        <h4 class="card-title">Title</h4>
        <div class="card-body">
          <p class="card-text">Some quick example text to build on </p>
          10 mins ago <div class="float-right"><i class="fa fa-comment-o" aria-hidden="true"></i> 0</div>
        </div>
      </div>
    </div>
  </div>

        </div>
    );
}

export default CardComp;

