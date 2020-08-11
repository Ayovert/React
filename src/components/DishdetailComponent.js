import React from 'react';
import {Card, CardImg, CardImgOverlay, CardTitle, CardBody, CardText, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom';




    function RenderDish({dish}) {
        if (dish != null){
            return(
                <div className = "col-12 col-md-5 m-1">
                     <Card  className="mt-2">
                   <CardImg src={dish.image} alt="{dish.name}" />
                   <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>
                            {dish.description}
                        </CardText>
                    </CardBody>    

               </Card>
               </div>

              
            );

        }
        else return(
            <div></div>
        );
    }

    function RenderComment({comments}){
        comments = Array.from(comments);
        if (comments!= null){
                return(
                    <div className = "col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                    <ul className='list-unstyled'>
                    {comments.map((comment) => { 
                        return(
                    <li key={comment.id}>
                    {comment.comment} 
                    <p>-- {comment.author}, {" "},
                    {new Intl.DateTimeFormat('en-US', 
                    { year: 'numeric', month: 'short', day: '2-digit'})
                    .format(new Date(Date.parse(comment.date)))}</p>
                    </li>
                        );
                })}
                    </ul>
                    </div>
                    
                );
                
        }
        else return(
            <div></div>
        );
    }

    const DishDetail = (props) =>{
        
        if(props.dish != null)
        return(
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
            <RenderComment comments={props.comments} />
        </div>
       </div>  
            
        );
        else return (
            <div></div>
        );
    }


export default DishDetail;