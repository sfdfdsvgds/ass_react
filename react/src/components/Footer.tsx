import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div>
        <footer>
        <div className="trademark">
          <img src="img/thuonghieu.jpg" alt="" className="img-fluid" width="860px" />
        </div>
        <div className="address">
          <div className="col">
            <img src="img/logo.jpg" alt="" width="100px" />
            <h6>techwarrions.vn</h6>
            <p>Địa chỉ: số 17 an trai - hoài đức - hà nội
            </p>
          </div>
          <div className="col">
            <p>Địa chỉ: số 17 an trai - hoài đức - hà nội
            </p>
          </div>
          <div className="col">
            <p>098.097.0999 - 023 024 5667 - 023 458 8734</p>
          </div>
          <div className="col">
            <i className="fab fa-twitter-square" />
            <i className="fab fa-facebook-square" />
            <i className="fab fa-instagram-square" />
            <i className="fab fa-youtube-square" />
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer