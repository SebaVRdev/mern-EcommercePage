
//Importamos para usar rutas
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
//Importamos Bootstrap components
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import {LinkContainer} from 'react-router-bootstrap';


//Screens
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>Inicio</Navbar.Brand>
              </LinkContainer>
            </Container>
          </Navbar>
        </header>
        <main>
          <Container>  
            <Routes>
              <Route path="/product/:slug" element={<ProductScreen/>}/>
              <Route path="/" element={<HomeScreen/>}/>
            </Routes>
          </Container>
        </main>
        <footer>
          <div className='text-center'>
            All rights reserved
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
