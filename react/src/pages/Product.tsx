import React from 'react'
import { ProductType } from './types/product'

type ProductProps = {
    products: ProductType[],
}

const Product = ({ products }: ProductProps) => {
    return (
        <div>
            <div className="filter">
                <nav className="navbar navbar-expand-lg navbar-light ">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            <i className="fas fa-align-left fa-lg" />
                            <button className="btn btn-outline-dark">Bộ Lọc </button>
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Loại Sản Phẩm
                                    </a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Thương Hiệu
                                    </a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Kích Cỡ
                                    </a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Giá Sản Phẩm
                                    </a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Sắp Xếp
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="product">
                {/* <div className="row">
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                        <div className="card" style={{ width: '18rem' }}>
                            <img src="img/alexander (1).jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Alexander McQueen </h5>
                                <p className="card-text">Áo khoác công sở blazer trắng đính sequin
                                    _quần áo blazer trắng nữ blazer - AliExpres</p>
                                <span>2.999.000.vnđ</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                        <div className="card" style={{ width: '18rem' }}>
                            <img src="img/alexander (4).jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Alexander McQueen </h5>
                                <p className="card-text">Áo khoác công sở blazer trắng đính sequin
                                    _quần áo blazer trắng nữ blazer - AliExpres</p>
                                <span>1.999.000.vnđ</span>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="row">
                    {products?.map((item) => {
                        return (
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                                <div className="card" style={{ width: '18rem' }}>
                                    <a href="ProductDetail">
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
    )
}

export default Product