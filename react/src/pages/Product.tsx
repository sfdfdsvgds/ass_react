import React from 'react'

type Props = {}

const Product = (props: Props) => {
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
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" href="#">Nam</a></li>
                                        <li><a className="dropdown-item" href="#">Nữ</a></li>
                                        <li><a className="dropdown-item" href="#">Trẻ Em</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Thương Hiệu
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" href="#">HERMÈS.</a></li>
                                        <li><a className="dropdown-item" href="#">Dolce &amp; Gabbana</a></li>
                                        <li><a className="dropdown-item" href="#">Louis Vuitton.</a></li>
                                        <li><a className="dropdown-item" href="#">DIOR</a></li>
                                        <li><a className="dropdown-item" href="#">NEW BALENCE</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Kích Cỡ
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" href="#">s</a></li>
                                        <li><a className="dropdown-item" href="#">M</a></li>
                                        <li><a className="dropdown-item" href="#">L</a></li>
                                        <li><a className="dropdown-item" href="#">XL</a></li>
                                        <li><a className="dropdown-item" href="#">XXL</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Giá Sản Phẩm
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" href="">&gt; 2.000.000 vnđ</a></li>
                                        <li><a className="dropdown-item" href="#">&gt;4.000.000.vnđ</a></li>
                                        <li><a className="dropdown-item" href="#">&gt;6.000.000.vnđ</a></li>
                                        <li><a className="dropdown-item" href="#">
                                            &lt; 7.000.000.vnđ </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Sắp Xếp
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" href="#">Tăng Dần </a></li>
                                        <li><a className="dropdown-item" href="#">Giảm Dần</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="product">

                <div className="row">
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                        <div className="card" style={{ width: '18rem' }}>
                            <img src="img/Valentino Ready To Wear Fall Winter 2015 Paris.jpg" className="img-fluid" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Dolce &amp; Gabbana</h5>
                                <p className="card-text">Áo khoác công sở blazer trắng đính sequin
                                    _quần áo blazer trắng nữ blazer - AliExpres</p>
                                <span>2.999.000.vnđ</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                        <div className="card" style={{ width: '18rem' }}>
                            <img src="img/produtc (1).jpg" className="img-fluid" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">DIOR</h5>
                                <p className="card-text">Áo khoác công sở blazer trắng đính sequin
                                    _quần áo blazer trắng nữ blazer - AliExpres
                                </p>
                                <span>799.000.vnđ</span>
                            </div>
                        </div>
                    </div>


                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                        <div className="card" style={{ width: '18rem' }}>
                            <img src="img/produtc (2).jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">DIOR</h5>
                                <p className="card-text">Outfits para chicas jóvenes que quieren verse más maduras-
                                    Designing Email Newsletters
                                </p>
                                <span>999.000.vnđ</span>
                            </div>
                        </div>
                    </div>


                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                        <div className="card" style={{ width: '18rem' }}>
                            <img src="img/produtc (3).jpg" className="card-img-top" alt="..." height="" />
                            <div className="card-body">
                                <h5 className="card-title">DIOR</h5>
                                <p className="card-text">Áo khoác công sở blazer trắng đính sequin
                                    _quần áo blazer trắng nữ blazer - AliExpres</p>
                                <span>1.999.000.vnđ</span>
                            </div>
                        </div>
                    </div>



                </div>
                <div className="row">
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                        <div className="card" style={{ width: '18rem' }}>
                            <img src="img/produtc (4).jpg" className="card-img-top" alt="..." height="" />
                            <div className="card-body">
                                <h5 className="card-title">NL</h5>
                                <p className="card-text">Áo khoác công sở blazer trắng đính sequin
                                    _quần áo blazer trắng nữ blazer - AliExpres</p>
                                <span>2.999.000.vnđ</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                        <div className="card" style={{ width: '18rem' }}>
                            <img src="img/produtc (5).jpg" className="card-img-top" alt="..." height="" />
                            <div className="card-body">
                                <h5 className="card-title">Dolce &amp; Gabbana</h5>
                                <p className="card-text">Áo khoác công sở blazer trắng đính sequin
                                    _quần áo blazer trắng nữ blazer - AliExpres
                                </p>
                                <span>799.000.vnđ</span>
                            </div>
                        </div>
                    </div>


                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                        <div className="card" style={{ width: '18rem' }}>
                            <img src="img/produtc (1).png" className="" alt="..." height="430px" />
                            <div className="card-body">
                                <h5 className="card-title">DIOR</h5>
                                <p className="card-text">Outfits para chicas jóvenes que quieren verse más maduras-
                                    Designing Email Newsletters
                                </p>
                                <span>999.000.vnđ</span>
                            </div>
                        </div>
                    </div>


                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                        <div className="card" style={{ width: '18rem' }}>
                            <img src="img/produtc (8).jpg" className="card-img-top" alt="..." height="" />
                            <div className="card-body">
                                <h5 className="card-title">Dolce &amp; Gabbana</h5>
                                <p className="card-text">Áo khoác công sở blazer trắng đính sequin
                                    _quần áo blazer trắng nữ blazer - AliExpres</p>
                                <span>1.999.000.vnđ</span>
                            </div>
                        </div>
                    </div>



                </div>

                <div className="row">
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
                            <img src="img/alexander (2).jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Alexander McQueen </h5>
                                <p className="card-text">Áo khoác công sở blazer trắng đính sequin
                                    _quần áo blazer trắng nữ blazer - AliExpres
                                </p>
                                <span>799.000.vnđ</span>
                            </div>
                        </div>
                    </div>


                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                        <div className="card" style={{ width: '18rem' }}>
                            <img src="img/alexander (3).jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Alexander McQueen </h5>
                                <p className="card-text">Outfits para chicas jóvenes que quieren verse más maduras-
                                    Designing Email Newsletters
                                </p>
                                <span>999.000.vnđ</span>
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
                </div>
            </div>
        </div>
    )
}

export default Product