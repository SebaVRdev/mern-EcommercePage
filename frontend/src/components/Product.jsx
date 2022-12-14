import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button' ;

//Componente de rating
import Rating from './Rating';
import axios from 'axios';
import { useContext } from 'react';
import { Store } from '../Store';

function Product(props) {
  
  //Guardamos los datos que vienen de las props
  const product = props.product;

  const {state, dispatch: ctxDispatch} = useContext(Store);
    const {
        cart: { cartItems },
    } = state;   

    const addToCartHandler = async (item) =>{
      const existItem = cartItems.find((pr) => pr._id === product._id);
      const quantity = existItem ? existItem.quantity + 1 : 1;
      const { data } = await axios.get(`/api/products/${item._id}`);
      if (data.countInStock < quantity) {
          window.alert('Sorry. Product is out of stock');
          return
        }

      ctxDispatch({
        type: 'CART_ADD_ITEM', 
        payload: {...item, quantity},
      });
    };

  return (
    <Card>
      <Link to={`/product/${product.slug}`}>
        <img className='card-img-top' src={product.image} alt={props.product.name} />
      </Link>
      <Card.Body>
        <Link style={{color: 'black', textDecoration:'none'}}  to={`/product/${product.slug}`}>
          <Card.Title>{product.name}</Card.Title>
        </Link>
        <Rating rating={product.rating} numReviews={product.numReviews}/>
        <Card.Text>${product.price}</Card.Text>
        {product.countInStock === 0 
          ? <Button disabled ><strong>Add To Cart</strong></Button>
          : <Button onClick={() => addToCartHandler(product)}><strong>Add To Cart</strong></Button>
        }
      </Card.Body>
    </Card>
  );
}

export default Product