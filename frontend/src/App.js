
//Importamos para usar rutas
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';

//Importamos Bootstrap components
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Badge from 'react-bootstrap/esm/Badge';
import Container from 'react-bootstrap/Container';
import {LinkContainer} from 'react-router-bootstrap';


//Screens
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';


import { Store } from './Store';

import { useContext } from 'react';

function App() {
  const {state} = useContext(Store);
  const { cart } = state   
  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>Inicio</Navbar.Brand>
              </LinkContainer>
              <Nav className="me-auto">     
                <Link to="/cart" className="nav-link">
                  Cart
                  {cart.cartItems.length > 0 && (
                    <Badge pill bg="danger">
                      {cart.cartItems.length}
                    </Badge>
                  )}
                </Link> 
              </Nav>
            </Container>
          </Navbar>
        </header>
        <main>
          <Container className="mt-3">  
            <Routes>
              <Route path="/product/:slug" element={<ProductScreen/>}/>
              <Route path="/cart" element={<CartScreen/>}/>
              <Route path="/" element={<HomeScreen/>}/>
            </Routes>
          </Container>
        </main>
        <footer>
          <div className="text-center">
            All rights reserved
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
