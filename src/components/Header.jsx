import React from 'react'
import { Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Upload } from 'react-feather';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>


      <Navbar className="bg-dark p-3">
        <Container>
          <Navbar.Brand>
            <Link to={'/'} style={{ textDecoration: 'none' }}>
              <span className='text-light'>

                <Upload />

                <span className='ms-2'>Videooo.com</span>

              </span>
            </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>

  )
}

export default Header