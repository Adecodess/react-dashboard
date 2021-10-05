import { Link } from 'react-router-dom';
import './product.css';
import Chart from '../../components/chart/Chart';
import { productData } from '../../dummyData';
import Itemimg from '../../images/airpods.jpg';
import { Publish } from '@material-ui/icons';

const Product = () => {
  return (
    <div className='product'>
      <div className='productTitleContainer'>
        <h1 className='productTitle'>Product</h1>
        <Link to='/newproduct'>
          <button className='productAddButton'>create</button>
        </Link>
      </div>
      <section className='productTop'>
        <div className='productTopLeft'>
          <Chart data={productData} dataKey='Sales' title='Sales Performance' />
        </div>
        <section className='productTopRight '>
          <div className='productInfoTop'>
            <img src={Itemimg} alt='item' className='productInfoImg' />
            <span className='productName'>Apple Airpods</span>
          </div>
          <div className='productInfoBottom'>
            <div className='prodcutInfoItem'>
              <span className='productInfoKey'>id:</span>
              <span className='productInfoValue'>123</span>
            </div>
            <div className='prodcutInfoItem'>
              <span className='productInfoKey'>sales:</span>
              <span className='productInfoValue'>5123</span>
            </div>
            <div className='prodcutInfoItem'>
              <span className='productInfoKey'>active:</span>
              <span className='productInfoValue'>yes</span>
            </div>
            <div className='prodcutInfoItem'>
              <span className='productInfoKey'>in stock:</span>
              <span className='productInfoValue'>no</span>
            </div>
          </div>
        </section>
      </section>
      <section className='productBottom'>
        <form className='productForm'>
          <div className='productFormLeft'>
            <label>Product Name</label>
            <input type='text' placeholder='Apple Airpod' />
            <label>In Stock</label>
            <select name='inStock' id='inStock'>
              <option value='yes'>Yes</option>
              <option value='no'>No</option>
            </select>
            <label>Active</label>
            <select name='active' id='active'>
              <option value='yes'>Yes</option>
              <option value='no'>No</option>
            </select>
          </div>
          <div className='productFormRight'>
            <div className='productUpload'>
              <img src={Itemimg} alt='product' className='productUploadImg' />
              <label for='file'>
                <Publish />
              </label>
              <input type='file' id='file' style={{ display: 'none' }} />
            </div>
            <button className='productButton'>Update</button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Product;
