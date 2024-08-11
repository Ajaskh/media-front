import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function Landing() {

  // function definition

  // redirect from one page to another page we can useNavigate hook

  const navigate=useNavigate()

  const handleNavigate=()=>{

    navigate('/home')
    
  }

  return (
    <div>

      <Row className="align-items-center mt-4">

        <Col lg={6} md={6} sm={12}>
          <h1>WELCOME TO VIDEOOO.COM</h1>
          <p style={{textAlign:'justify'}}>Where user can use their favorite videoos.User can upload any youtube videos by copy and paste their url in to videooo.com will allow to add and remove their uploaded videos and also arrange them in different categories by drag and drop it is free try it now!!!</p>
          <button onClick={handleNavigate} className='btn btn-dark'>Click Here to Know More</button>
        </Col>

        <Col lg={6} md={6} sm={12}>
          <img className="img-fluid" src='https://imgs.search.brave.com/D6uLs2bMq2JG4aN-CnAUnrkCdOtHlp0GNyyTTPSJx28/rs:fit:860:0:0/g:ce/aHR0cHM6Ly95b3Vy/aW1hZ2VzaGFyZS5j/b20vaW1hZ2VzL3Nl/Y3Rpb25zL3VwbG9h/ZC5zdmc.svg' alt='no-image'/>
        </Col>
      </Row>
    </div>
  )
}

export default Landing