import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button' ;

//Componente de rating
import Rating from './Rating';

function Product(props) {
    //Guardamos los datos que vienen de las props
    const product = props.product;
  return (
    <Card>
      <Link to={`/product/${product.slug}`}>
        <img className='card-img-top' src={product.image} alt={props.product.name} />
      </Link>
      <Card.Body>
        <Link to={`/product/${product.slug}`}>
          <Card.Title>{product.name}</Card.Title>
        </Link>
        <Rating rating={product.rating} numReviews={product.numReviews}/>
        <Card.Text>${product.price}</Card.Text>
        <Button><strong>Add To Cart</strong></Button>
      </Card.Body>
    </Card>
  );
}

export default Product