import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle , CardImgOverlay} from "reactstrap";


class Dishdetail extends Component{
    
    constructor(props) {
        super(props);

    }

   

    


    

        render() {
            const DishDescription = this.props.dishes.map((dish)=> {
                if(dish != null){
                    //console.log(dish.image);
                    return(
                        <Card onClick={() => this.props.onClick()}>
                            <CardImg width="100%" src={dish.image} />
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>                    
                            </CardBody>
                        </Card>
                    );
                }else{
                    return(
                        <div></div>
                    );
                }
            })
            const comments = this.props.dishes.map((dish)=>{
                console.log(dish);
                if (dish != null) {
                  return (
                    <div className="col-12 col-md-5 m-1">
                      <h4>Comments</h4>
                        <ul className="list-unstyled">
                        {dish.comments.map(comment => {
                          return (
                            <div key={comment.id}>
                              <li key={comment.id}>
                                <p>{comment.comment}</p>
                                <p>
                                  -- {comment.author} ,{" "}
                                  {new Intl.DateTimeFormat("en-US", {
                                    year: "numeric",
                                    month: "short",
                                    day: "2-digit"
                                  }).format(new Date(Date.parse(comment.date)))}
                                </p>
                              </li>
                            </div>
                          );
                        })}
                        </ul>
                    </div>
                  );
                } else return <div />;
            });

            return(
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1"> 
                        { DishDescription }
                        </div>   

                        <div className="col-12 col-md-5 m-1">
                            { comments }
                        </div>     
                    </div>

                    
                
                </div>
    
            );
    

        }
        
    }


export default Dishdetail;