import React,{useState,useEffect} from 'react'
import { Container, Row,Col } from 'react-bootstrap';
import Pizza from '../components/Pizza';


function HomeScreen() {

    const [data,setData]=useState([]);
    useEffect(async()=>{
        let result=await fetch("https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68");
        result=await result.json();
        setData(result)
    },[])
    console.warn("result",data)
  return (
    <>
      <Container>
        <Row>
            {
                data.map(pizza=> (
                    <Col md={4}>
                        <Pizza pizza={pizza}/>
                    </Col>
                ))
            }
        </Row>
      </Container>
    </>
  )
}

export default HomeScreen
