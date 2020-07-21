import React from 'react';
import {Link} from 'react-router-dom';
import {Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb,BreadcrumbItem} from 'reactstrap';
import { Loading } from './LoadingComponent';



    function RenderMenuItem({dish}) {
        
        return (
                <Card>
                    <Link to={`/menu/${dish.id}`}>
                        <CardImg width="50%" src={dish.image} alt={dish.name}/>
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                            
                        </CardImgOverlay>
                    </Link>
                </Card>
                 
        );
    }
   
        const Menu=(props)=>{
            const menu= props.dishes.dishes.map((dish)=>{
                return (
                    <div key={dish.id} className="col-12 col-md-5 m-1">
                        <RenderMenuItem dish={dish} ></RenderMenuItem>
                        {/*<Media tag="li">
                            <Media left middle>
                                <Media object src={dish.image} alt={dish.name} />
                            </Media>
                            <Media body className="ml-5">
                                <Media heading>{dish.name}</Media>
                                <p>{dish.description}</p>
                            </Media>
                        </Media>*/}
                </div>
    
                );
            });
            
            if(props.dishes.isLoading){
                return (
                    <div className="container">
                        <div className="row">
                            <Loading/>
                        </div>
                    </div>
                );
                
            }
            else if(props.errMess){
                return (
                    <div className="container">
                        <div className="row">
                            <h4>{props.dishes.errMess}</h4>
                        </div>
                    </div>
                );
            }
            else{

                return (
                    <div className="container">
                        <div className="row">
                            <Breadcrumb>
                                <BreadcrumbItem>
                                    <Link to='/home'>Home</Link>
                                </BreadcrumbItem>
                                
                                <BreadcrumbItem active>
                                    Menu
                                </BreadcrumbItem>
                            </Breadcrumb>
                            <div className="col-12">
                                <h3>Menu</h3>
                            </div>
                        </div>
                        <div className="row">
                            
                                {menu}
                           
                        </div> 
                    </div>
                );

            }
    
        }
        
    
export default Menu;