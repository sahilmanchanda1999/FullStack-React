import React from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle,Breadcrumb,BreadcrumbItem} from 'reactstrap';

import {Link} from 'react-router-dom';

    
    function RenderDish({dish}){
        
        return (
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    }
    function RenderComments({comments}){
        const comment=comments.map((com)=>{
            return(
                <div>
                    <li className="mt-4">{com.comment}</li>
                    <li className="mt-4">
                        -- {com.author}, {new Intl.DateTimeFormat('en-US',{year:'numeric',month:'short',day:'2-digit'}).format(new Date(Date.parse(com.date)))}
                    </li>
                </div>
            );
        });
        return (
            <div>
              <h4>Comments</h4>
              <ul className="list-unstyled">{comment}</ul>
            </div>
          );
    }
    const DishDetail =(props)=>{
        const dish=props.dish;
        if(dish==null){
            return (
                <div></div>
            );
        }
        return (
            <div className="container">
                <div className="row">
                        <Breadcrumb>
                            
                            <BreadcrumbItem>
                                <Link to='/menu'>Menu</Link>
                            </BreadcrumbItem>
                            
                            <BreadcrumbItem active>
                                {props.dish.name}
                            </BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{props.dish.name}</h3>
                        </div>
                </div>
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={props.dish}/>   
                </div>
                <div className="col-12 col-md-5 m-1">
                    <RenderComments comments={props.comments}/>   
                </div>


            </div>
            </div>
        );
    }

export default DishDetail;