import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'


function About() {
  return (
    <Container style={{marginTop:'50px'}}>
        <h1>Who we are</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, accusantium! Facere quia, distinctio, temporibus impedit optio aliquid, aliquam maxime vitae ab quo quae omnis sequi ad maiores ullam earum voluptatibus.</p>
        <h1>Our Speciality</h1>
        <Row>
        <Col md={6}>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus dolorum sed impedit culpa ab laborum laudantium dicta aliquid non esse vel perspiciatis quis quo pariatur rem quia consequatur repudiandae magnam dolore eligendi cumque nemo, aliquam odit. Illo quam consequuntur culpa? Temporibus quam provident corrupti dolores. Dolorem, nostrum itaque provident voluptate ad commodi id laboriosam porro ex fugiat dolores, laborum maxime pariatur architecto fugit voluptates aliquid voluptas corporis accusamus, consequuntur quas. Ratione, in nesciunt. Consequuntur perspiciatis earum aliquid vero facilis ipsum excepturi quasi. Doloremque, ducimus sunt adipisci perspiciatis quis quod, quos harum nam dicta rem est corporis iusto ullam minima vero.
            </p>
            </Col>
            <Col md={6}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est hic voluptatum, quas placeat totam necessitatibus, omnis repellat eos at recusandae, provident fuga. Tempora, provident amet maiores incidunt inventore repellat reiciendis quia nihil quis mollitia et perspiciatis quae velit nulla dicta delectus possimus cumque magni cum tempore voluptatem quasi! Cupiditate quo optio temporibus doloremque culpa nam nobis ullam vero iure, nihil dignissimos in. Placeat ducimus ad quae sed rerum temporibus dicta quibusdam quisquam, commodi tempora unde aliquid dolore magnam, ipsum, mollitia officia delectus. Deleniti, optio magni. Ut animi incidunt a, id, ad quas, laudantium soluta porro accusantium iure nulla ea modi.
                </p>
            </Col>
            </Row>
            <Row>
                <h1>Our Cheif</h1>
                <Col md={3}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita minus modi fugiat unde quia soluta sapiente odit accusamus provident est!</Col>
                <Col md={3}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita minus modi fugiat unde quia soluta sapiente odit accusamus provident est!</Col>
                <Col md={3}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita minus modi fugiat unde quia soluta sapiente odit accusamus provident est!</Col>
                <Col md={3}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita minus modi fugiat unde quia soluta sapiente odit accusamus provident est!</Col>
            </Row>

    </Container>
  )
}

export default About
