import { useEffect} from 'react'

//import { data } from '../data'

import axios from 'axios';
import { useReducer } from 'react';
import logger from 'use-reducer-logger';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//Importamos componente
import Product from '../components/Product';

import {Helmet} from 'react-helmet-async';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

//Reducer Hook
const reducer = (state, action) => {
  switch(action.type){
    case 'FETCH_REQUEST':
      return {...state, loading:true};
    case 'FETCH_SUCCES':
      return {...state, products: action.payload, loading: false};
    case 'FETCH_FAIL':
      return {...state, loading: false, error:action.payload};
    default:
      return state;
  }
};

function HomeScreen() {
  const [{loading, error, products}, dispatch] = useReducer(logger(reducer),{
    products:[],
    loading: true,
    error: ''
  })

  //Products for backend
  useEffect(()=>{
    //Call API
    const fetchData = async() => {
      dispatch({type:'FETCH_REQUEST'});
      try {
        const result = await axios.get('api/products');
        dispatch({type:'FETCH_SUCCES', payload: result.data})
      } catch (error) {
        console.log(error);
        dispatch({type:'FETCH_FAIL', payload: error.message});
      }
      //setProducts(result.data);
    };
    fetchData();
  }, [])

  return (
        <div>
          <Helmet>
            <title>Sebazona</title>
          </Helmet>
          <h1>Featured Products</h1>
          <div className="products">
            {loading ? (<LoadingBox/>)
            : error ? (<MessageBox variant="danger">{error.message}</MessageBox>)
            :(
            <Row>
              {products.map(product => (
                <Col key={ product.slug} sm={6} md={4} lg={3} className="mb-3">
                  <Product product={product}/>        
                </Col>
                ))}
            </Row>
            )}
          </div>
        </div>
  )
}

export default HomeScreen