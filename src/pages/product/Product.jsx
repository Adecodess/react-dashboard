import { Link } from 'react-router-dom';
import './product.css';

const Product = () => {
  return (
    <div className='product'>
      <div className='productTitleContainer'>
        <h1 className='productTitle'>product</h1>
        <Link to='/newproduct'>
          <button className='productAddNutton'>create</button>
        </Link>
      </div>
    </div>
  );
};

export default Product;
