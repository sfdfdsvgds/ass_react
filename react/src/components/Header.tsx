import React from 'react'

type Props = {}

const Header = (props: Props) => {
  return (
    <div>
        <div className="header-main">
        <div className="container"></div>
        <nav className="navbar navbar-expand-lg navbar-light ">
          <div className="container-fluid">
            <a className="navbar-brand" href="#"><img src="http://localhost:3000/img/logo.jpg" alt="" width="150px" /></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
              aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page"
                    href="/">Trang Chủ</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page"
                    href="/Product">Sản phẩm</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page"
                    href="/News">Tin Tức</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page"
                    href="/Introduce">Giới Thiệu</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page"
                    href="/Contact">Liên Hệ</a>
                </li>
              </ul>
              <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search.."
                  aria-label="Search" />
                <button type="button" className="btn btn-outline-dark"><i
                  className="fas fa-search"></i></button>
                <div className="icon">
                  <a href=""><i className="fas fa-cart-plus"></i></a>
                  <a href="Signin"> <i className="fas fa-user"></i></a>
                </div>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Header