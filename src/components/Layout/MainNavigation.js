import { useContext, useState } from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../shared/context/auth-context';
import classes from './MainNavigation.module.css'

const MainNavigation = () => {
  const auth = useContext(AuthContext)
  const navigate = useNavigate()
  const [expanded, setExpanded] = useState(false);

  const onLogOut = () => {
    auth.logout()
    navigate('/')
  }

  return (
    <Navbar collapseOnSelect expand="md" className={classes.navbar} variant='dark' expanded={expanded}>
      <Container>
        <Navbar.Brand as={Link} to='/' className="justify-content-start">React Banking</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")} />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link as={Link} to='/' onClick={() => setExpanded(false)} >Home</Nav.Link>
            {!auth.isLoggedIn && (
              <Nav.Link as={Link} to='/login' onClick={() => setExpanded(false)}>Login</Nav.Link>
            )}
            {!auth.isLoggedIn && (
              <Nav.Link as={Link} to='/auth' onClick={() => setExpanded(false)}>Register</Nav.Link>
            )}
            {auth.isLoggedIn && (
              <Nav.Link as={Link} to='/profile' onClick={() => setExpanded(false)}>profile</Nav.Link>
            )}
            <Nav.Link as={Link} to='/users' onClick={() => setExpanded(false)}>All Users</Nav.Link>
            {auth.isLoggedIn && (
              <Button onClick={onLogOut} variant="outline-light">LOGOUT</Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );;
}
export default MainNavigation
