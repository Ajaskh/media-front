import React, { useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import Add from './Add'
import View from './View'
import Category from './Category'
import { Link } from 'react-router-dom'
import { Clock } from 'react-feather'

function Home() {

  const [serverRes, setserverRes] = useState({})

  // function definition
  const handleResponse = (res) => {
    setserverRes(res)
  }

  return (
    <>

      <Row className='align-items-center mt-5'>
        <Col style={{textAlign:'left'}}>
        <Add handleResponse={handleResponse}/>
        </Col>
        <Col style={{textAlign:'right'}}>
        <Link style={{ textDecoration: 'none', fontSize: "30px", color: "blue" }} to={'/watchhistory'}><Button variant="dark">Watch History</Button></Link>
        </Col>
      </Row>

      <Row className='mt-5'>
        {/* view component */}
        <Col lg={7}>
          <View serverRes={serverRes} />
        </Col>

        {/* category */}
        <Col lg={5}>
          <Category />
        </Col>

      </Row>

      {/* <div className="container-fluid">

      <Row className='mb-4'>
        <div className='d-flex justify-content-between'>
          <Col lg={8}>
            <Add handleResponse={handleResponse} />
          </Col>
          <Col lg={4}>
            <Link style={{ textDecoration: 'none', fontSize: "30px", color: "blue" }} to={'/watchhistory'}><Clock size={60} /></Link>
          </Col>
        </div>

      </Row>


      {/* <Link style={{textDecoration:'none', fontSize:"30px", color:"blue"}} to={'/watchhistory'}>Watch History</Link> */}

      {/* <Row> */}
        {/* add component */}
        {/* <Col lg={1}>
            <Add handleResponse={handleResponse} />
          </Col> */}

        {/* view component */}
        {/* <Col lg={7}>
          <View serverRes={serverRes} />
        </Col>

        {/* category */}
        {/* <Col lg={5}>
          <Category />
        </Col>
      </Row> */}
      {/* </div> */}
    </>
  )
}

export default Home