import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import './NavBar.css';

export default function NavBar({ user, logoutHandler }) {
  return (
    <Navbar bg="light" data-bs-theme="light" className="custom-navbar">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="https://png.pngtree.com/png-clipart/20210309/original/pngtree-socks-logo-design-png-image_5878741.png"
            alt="Логотип"
            width="80"
            height="80"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Nav className="me-auto">
          <NavLink to="/" className="nav-link">
            Главная
          </NavLink>
          <NavLink to="/constructor" className="nav-link">
            Конструктор
          </NavLink>
        </Nav>
        <Nav className="align-items-center">
          <NavLink to="/saved-designs" className="nav-link">
            <FaHeart size={24} /> 
          </NavLink>
          <span className="nav-link">|</span> 
          <NavLink to="/cart" className="nav-link">
            <FaShoppingCart size={24} /> 
          </NavLink>
        </Nav>
        <Nav>
          {!user.data && (
            <>
              <NavLink to="/account/login" className="nav-link">
                Войти
              </NavLink>
              <NavLink to="/account/new" className="nav-link">
                Регистрация
              </NavLink>
              <span className="nav-link">|</span>
            </>
          )}
          <span className="nav-link">
            {user.data ? user.data.name : 'Гость'}
          </span>
          {user.data && (
            <span className="nav-link">
              <Button
                onClick={logoutHandler}
                variant="outline-danger"
                size="sm"
              >
                Выйти
              </Button>
            </span>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
}