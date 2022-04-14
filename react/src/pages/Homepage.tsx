import { Item } from 'rc-menu'
import React from 'react'
import Product from './Product'
import { ProductType } from './types/product'

type HomepageProps = {
  product: ProductType[]
}

const Homepage = (product: HomepageProps) => {
  return (
    <div>
      <div className="content">
        <div className="title">
          <h2 className="h1">Tech Warrios</h2>
          <p>chất lượng khoảng khắc mới là quan trọng , không phải số ngày, hay số sự kiện, hay số nguời tham
            gia
          </p>
        </div>
        <div className="row">
          <div className="col-xl-4 col-lg-3 col-md-6 col-sm-12">
            <img src="img/IMG24.jpg" alt="" className="img-fluid" />
          </div>
          <div className="col-xl-4 col-lg-3 col-md-6 col-sm-12">
            <div className="img-row-one">
              <img src="img/sale.gif" alt="" className="img-fluid" />
            </div>
            <div className="img-row-two">
              <img src="img/img-20.jpg" alt="" className="img-fluid" />
            </div>
          </div>
          <div className="col-xl-4 col-lg-3 col-md-6 col-sm-12">
            <img src="img/sale (1).jpg" alt="" className="img-fluid" />
          </div>
        </div>

        <div className="hot-produtc">
          <div className="news">
            <h3 className="border-bottom">BEST SELLING PRODUCTS
            </h3>
          </div>
          <div className="row">
            {product.product?.map((item) => {
              return (
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                  <div className="card" style={{ width: '18rem' }}>
                    <a href={`${item._id}/ProductDetail`}>
                      <img src={item.img} className="card-img-top" alt="..." /></a>
                    <div className="card-body">
                      <h5 className="card-title">{item.name}</h5>
                      <p className="card-text"></p>
                      <span>{item.price}vnđ</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </div>
  )
}

export default Homepage