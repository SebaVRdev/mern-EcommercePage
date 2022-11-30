import Spinner from 'react-bootstrap/Spinner';

function LoadingBox() {
  return (
    <Spinner animation="border" role="statux">
        <span className='visually-hiden'>Loading...</span>
    </Spinner>
  )
}

export default LoadingBox