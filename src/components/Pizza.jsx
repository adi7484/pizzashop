import React,{useState} from 'react'
import {Card,Button,Row,Col} from "react-bootstrap"
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';


import { FaStar } from 'react-icons/fa';

const generateRating = (rating) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(<FaStar key={i} />);
    } else {
      stars.push(<FaStar key={i} color="gray" />);
    }
  }
  return stars;
};


const Pizza=({pizza})=> {
 

  const [quantity,setQuantity]=useState(1)
  const [show, setShow] = useState(false);

  

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <>
      <Card style={{ width: '20rem' ,marginTop:"30px"}}>
      <Card.Img variant="top" src={pizza.img_url} style={{height:"250px"}}
      
      />

      <Card.Body>
        <Card.Title>{pizza.name}</Card.Title>
        <Card.Text>
          <Row> <Col md={6}>
            <h6>Choose size</h6>
            
          </Col>
          <Col md={6}>
            <h6>Quantity</h6>
            <select value={quantity} onChange={e=>setQuantity(e.target.value)}>
              {[...Array(10).keys()].map((v,i)=>(
                <option value={i+1}>
                  {i+1}</option>
              ))}
            </select>
          </Col>
          </Row>         
        </Card.Text>
        <Row >
          <Col md={6}>
            Price:&nbsp;{pizza.price*quantity}/-Rs
          </Col>
          <Col md="auto">Rating:- {generateRating(pizza.rating)}</Col>

          <Col  md={12}>
          <Button className='bg-warning text-white'  onClick={handleShow} >More Options</Button>
                  &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <Link to="/cart"> <Button className='bg-warning text-white' >Add to Cart</Button> </Link>
          </Col>
        </Row>
      </Card.Body>
    </Card>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>
        <div><Card.Img variant="top" src={pizza.img_url} style={{height:"250px"}}/></div>
        <div><Modal.Body>{pizza.description}</Modal.Body></div>
        
      </Modal>
    </>
  )
}

export default Pizza