import React, { Component } from 'react';
import {Card, CardImg, CardText,Button, CardBody, CardTitle,Breadcrumb,BreadcrumbItem,Modal,ModalBody,ModalHeader,Row,Col,Label} from 'reactstrap';
import {Control,LocalForm,Errors} from 'react-redux-form';
import {Link} from 'react-router-dom';

const required = (val) => val && val.length;
const maxLength= (len) => (val)=> !(val) || (val.length<=len);
const minLength= (len) => (val)=> (val) && (val.length>=len);

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
    class CommentForm extends Component{
        constructor(props){
            super(props);
            this.state ={
                isModalOpen:false
            };
            this.toggleModal=this.toggleModal.bind(this);
            this.handleSubmit=this.handleSubmit.bind(this);
        }
        toggleModal(){
            this.setState({
                isModalOpen:!this.state.isModalOpen
            });
        } 
        handleSubmit(values){
            console.log("Current state is "+ JSON.stringify(values));
            alert("Current state is "+ JSON.stringify(values));
            
        }
        render(){
            return(
                <div className="container">
                    <Button outline onClick={this.toggleModal}>
                        <span className="fa fa-pencil fa-lg"></span> Submit Comment
                    </Button>
                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                        <ModalHeader isOpen={this.state.isModalOpen} toggle={this.toggleModal}>Submit Comment</ModalHeader>
                        <ModalBody>
                            <LocalForm onSubmit={(values)=>this.handleSubmit(values)}>
                                <Row className="from-group">
                                    <Label htmlFor="rating" md={12}>Rating</Label>
                                    <Control.select model=".rating" className="form-control ml-3 mr-3" name="rating">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>

                                    </Control.select>
                                </Row>
                                <Row className="from-group">
                                    <Label htmlFor="name" md={12}>Your Name</Label>
                                    <Control.text model=".name" className="form-control ml-3 mr-3"
                                        placeholder="Your Name"
                                        name="name"
                                        validators={{
                                            required, minLength: minLength(3),maxLength:maxLength(15)
                                        }}/>  
                                      <Errors className="text-danger ml-3 mr-3"
                                        model=".name"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 chars or less'

                                        }}/>                   
                                </Row>
                                <Row className="from-group">
                                    <Label htmlFor="comment" md={12}>Comment</Label>
                                    <Control.textarea model=".comment" className="form-control ml-3 mr-3"
                                        rows="7" name="comment"/>                     
                                </Row>
                                <Row className="from-group">
                                        <Button type="submit" className="m-3" color="primary">Submit</Button>                
                                    
                                </Row>
                            </LocalForm>
                        </ModalBody>
                    </Modal>
                </div> 
            );
        }
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
                    <CommentForm/> 
                </div>


            </div>
            </div>
            
        );
    }

export default DishDetail;