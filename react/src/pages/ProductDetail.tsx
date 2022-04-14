import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
type Props = {}
type ProductType = {
  _id: number,
  name: string,
  price: number
}
const ProductDetail = (props: Props) => {
  const { id } = useParams();
  const [product, setProduct] = useState<ProductType>();
  useEffect(() => { 
    const getProduct = async () => {
      const response = await fetch('http://localhost:8000/api/products/' + id);
      const data = await response.json();
      setProduct(data);
    }
    getProduct();
  }, []);
  return (
    <div>
      <div className="container">
        <div className="card">
          <div className="container-fliud">
            <div className="wrapper row">
              <div className="preview col-md-6">
                <div className="preview-pic tab-content">
                  <div className="tab-pane active" id="pic-1"><img src={product?.img} width="70%" /></div>
                </div>
              </div>
              <div className="details col-md-6">
                <h3 className="product-title">{product?.name}</h3>
                <h4 className="price">{product?.price}</h4>
                <h5 className="sizes">sizes:
                  <span className="size" data-toggle="tooltip" title="small">s</span>
                  <span className="size" data-toggle="tooltip" title="medium">m</span>
                  <span className="size" data-toggle="tooltip" title="large">l</span>
                  <span className="size" data-toggle="tooltip" title="xtra large">xl</span>
                </h5>
                <div className="action">
                  <button className="add-to-cart btn btn-default" type="button">add to cart</button>
                  <button className="like btn btn-default" type="button"><span className="fa fa-heart" /></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
