import React from 'react';
import {Card, CardImg, CardImgOverlay, CardTitle, CardBody, CardText} from 'reactstrap';




    function RenderDish({dish}) {
        if (dish != null){
            return(
                     <Card  className="mt-2">
                   <CardImg src={dish.image} alt="{dish.name}" />
                   <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>
                            {dish.description}
                        </CardText>
                    </CardBody>    

               </Card>

              
            );

        }
        else return(
            <div></div>
        )
    }

    function RenderComment({dish}){
        if (dish != null){
           const COMMENT = dish.comments.map((comments) => {
                return(
                    <ul key={comments.id} className='list-unstyled'>
                    <li key={comments.id}>
                    {comments.comment} 
                    <p>-- {comments.author}, {" "},
                    {new Intl.DateTimeFormat('en-US', 
                    { year: 'numeric', month: 'short', day: '2-digit'})
                    .format(new Date(Date.parse(comments.date)))}</p>
                    </li>
                    </ul>
                    
                    
                )
                
           });
            return(
                <div>
                    <h1>Comments</h1>
                    {COMMENT} 
                </div>
             
            );

        }
        else return(
            <div></div>
        )
    }

    const DishDetail = (props) =>{
        return(
    <div className="container">
      <div className="row">
        <div className = "col-12 col-md-5 m-1">
            <RenderDish dish={props.dish} />
        </div>

        <div className = "col-12 col-md-5 m-1">
               <RenderComment dish={props.dish} />
        </div>
       </div>
        

    </div>
            
        )
    }


export default DishDetail;