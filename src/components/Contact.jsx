import React from 'react'
import {Container,Row,Col,Image} from 'react-bootstrap'
import Table from 'react-bootstrap/Table'
import {FiPhoneCall} from 'react-icons/fi'
import {ImMobile} from 'react-icons/im'

function Contact() {
  return (
    <>
      <Container style={{marginTop:'50px'}}>
        <Row>
            <Col md={6}>
                <h1>Pizza Shop</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur id officia ex fugit unde sint culpa quasi alias minima illum, cumque perferendis rerum, nulla ipsam iste explicabo cupiditate inventore fuga libero at expedita. Commodi aliquid nulla dignissimos ratione impedit omnis numquam dolorem obcaecati nisi ad doloremque beatae eos modi debitis ullam, voluptatum, libero, quos placeat similique. Dolorum optio ipsum rerum dignissimos ullam quia nisi similique, ea iure ipsa iusto, quasi exercitationem numquam nesciunt dolores adipisci dolor sint odio tenetur cum deleniti culpa aut! Reiciendis dignissimos fugiat exercitationem repellendus, qui tenetur vitae consequuntur commodi quod quidem ullam labore, fugit molestiae natus rerum. Esse sunt ab laudantium inventore atque repellendus ipsam rem vero accusantium suscipit optio unde animi dolore veritatis rerum aut fugit, eum illum id incidunt? Harum natus aperiam deserunt, quam saepe, maxime commodi, tempora provident eligendi cupiditate architecto asperiores eaque quas beatae. Alias, dolores cumque? Id exercitationem iusto aspernatur, provident expedita deleniti ea odit voluptate quos sunt ipsum ullam! Ipsam dolores nihil corrupti possimus a hic quis quasi dolore reiciendis veniam. Libero delectus laborum facilis eveniet nemo reiciendis ad itaque, odio eum animi accusamus nisi iure temporibus nam dolorum dicta labore fuga hic asperiores ullam voluptates mollitia aperiam modi dolore.
                </p>
                <Table striped bordered hover className='text-center'>
      <thead>
        <tr>
          <th className='bg-warning text-center'colSpan={3}>-------Contact Details-----</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><FiPhoneCall/></td>
          <td>Phone</td>
          <td>01234-45664</td>
        </tr>
        <tr>
          <td><ImMobile/></td>
          <td>Email</td>
          <td>info@gmail.com</td>
        </tr>
      </tbody>
    </Table>

            </Col>
            <Col md={6}>
                <Image src="images/farmhouse.jpg" style={{width:'100%', height:'50%'}}/>
            </Col>
        </Row>
      </Container>
    </>
  )
}

export default Contact
