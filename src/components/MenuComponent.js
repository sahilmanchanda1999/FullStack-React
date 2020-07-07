import React from 'react';

import {Card, CardImg, CardImgOverlay, CardTitle} from 'reactstrap';



    function RenderMenuItem({dish, onClick}) {
        
        return (
                <Card onClick={()=>onClick(dish.id)}>

                        <CardImg width="50%" src={dish.image} alt={dish.name}/>
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                            
                        </CardImgOverlay>
                </Card>
        );
    }
   
        const Menu=(props)=>{
            const menu= props.dishes.map((dish)=>{
                return (
                    <div key={dish.id} className="col-12 col-md-5 m-1">
                        <RenderMenuItem dish={dish} onClick={props.onClick}></RenderMenuItem>
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
    
    
            return (
                <div className="container">
                    <div className="row">
                        
                            {menu}
                       
                    </div> 
                </div>
            );
        }
        
    
export default Menu;