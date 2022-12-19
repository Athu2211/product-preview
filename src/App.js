import './App.css';
import { Row, Col, Button, Container } from 'react-bootstrap'
import productImage from './images/image-product-desktop.jpg';


function App() {
  return (
    <Container className='content'>
      <Row>
        <Col xs={5} className='product-image-outer'>
          <img className='product-image' alt='product' src={productImage} />
        </Col>
        <Col xs={6} className="product-details">
          <h5 className='product'>PERFUME</h5>
          <h1 className='product-name'>Gabrielle Essence Eau De Parfum</h1>
          <p className='product-description'>A floral, solar and voluptuous interpretation composed by Olivier Polge,
            Perfumer-Creator for the House of CHANEL.</p>
          <span className='cost'>$149.99</span>&nbsp;&nbsp;&nbsp;<span className='old-cost'>$169.99</span>
          <div className='btn'>
            <Button className='add-to-cart'><span className='fa fa-cart fa-shopping-cart'></span> Add to Cart</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
