import '../App.min.css'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import logo from '../assets/img/logo512-transparent.png'
import { useAuth0 } from '@auth0/auth0-react'
import LoginButton from './login-logout-btns/LoginButton'
import LogoutButton from './login-logout-btns/LogoutButton'

function NavBar() {
  const { isAuthenticated } = useAuth0()
  return (
    <>
      {/* set expand='sm' attribute for mobile responsiveness */}
      <Navbar bg='primary' variant='dark' className='mb-3'>
        <Container>
          <Navbar.Brand>
            <Link to='/' className='hover-brand'>
              <img src={logo} alt='stork logo' className='logo hover-grow' />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='navbarScroll' />
          <Navbar.Collapse id='navbarScroll'>
            <Nav
              className='me-auto my-2 my-lg-0 position-relative'
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              {/* <Link to='/' className='ms-sm-1 text-info nav-button'>
                Registry
              </Link>
              <Link to='/babyshower' className='ms-sm-1 text-info nav-button'>
                Baby Shower
              </Link> */}
            </Nav>
            {isAuthenticated ? <LogoutButton /> : <LoginButton />}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar
