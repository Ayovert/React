import React, {Component} from 'react'
import {Card, CardImg, CardImgOverlay, CardTitle, CardBody, CardText} from 'reactstrap'
import { id } from 'postcss-selector-parser';


class DishDetail extends Component{

    constructor(props){

        super(props);

        this.state = {
            
        }

    }

    renderDish(dish){
        if (dish != null){
            return(
               <Card className="mt-2">
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

    renderComment(dish){
        if (dish != null){
           const COMMENT = dish.comments.map((comments) => {
                return(
                    <ul className='list-unstyled'>
                    <li key={id}>
                    {comments.comment} 
                    <p>-- {comments.author}, {comments.date}   </p>
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

    render(){
        return(
            <div className="row">
            <div className = "col-12 col-md-5 m-1">
            { this.renderDish(this.props.selectedDish)}
        </div>

        <div className = "col-12 col-md-5 m-1">
               { this.renderComment(this.props.selectedDish) }
        </div>
        </div>
        
        )
    }
}


export default DishDetail;