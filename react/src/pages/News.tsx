import React from 'react'

type Props = {}

const News = (props: Props) => {
  return (
    <div>
        <div className="container">
                <div className="bar">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="#">Trang Chủ</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Tin Tức</li>
                        </ol>
                    </nav>
                </div>
                <div className="news-post">
                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                            <h3> Bài viết mới nhất</h3>
                            <div className="title">
                                <div className="row">
                                    <div className="col-md-4 col-sm-12">
                                        <a href=""><img src="img/news (2).jpg" alt="" width="200px" /></a>
                                    </div>
                                    <div className="col-md-6 col-sm-12">
                                        <h5 className="text-title"> <a href=""> Váy cao cấp Dior lấy cảm hứng từ bài
                                            Tarot...</a></h5>
                                        <p>
                                            Bộ sưu tập mới của Dior ra mắt bằng một bộ phim ngắn của đạo diễn Italy - Matteo
                                            Garrone,
                                            nằm trong khuôn khổ Tuần lễ thời trang cao cấp Paris mùa mốt Xuân Hè 2021 diễn
                                            ra từ
                                            ngày 25 đến 29/1. Phim xoay quanh câu chuyện về một cô gái muốn khám phá bản
                                            thân.
                                            Trên
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="title">
                                <div className="row">
                                    <div className="col-md-4 col-sm-12">
                                        <a href=""><img src="img/news (2).png" alt="" width="200px" /></a>
                                    </div>
                                    <div className="col-md-6 col-sm-12">
                                        <h5> <a href="" className="text-title"> Váy cao cấp Dior lấy cảm hứng từ bài
                                            Tarot...</a></h5>
                                        <p>
                                            Bộ sưu tập mới của Dior ra mắt bằng một bộ phim ngắn của đạo diễn Italy -
                                            Matteo
                                            Garrone,
                                            nằm trong khuôn khổ Tuần lễ thời trang cao cấp Paris mùa mốt Xuân Hè 2021
                                            diễn
                                            ra từ
                                            ngày 25 đến 29/1. Phim xoay quanh câu chuyện về một cô gái muốn khám phá bản
                                            thân.
                                            Trên
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="title">
                                <div className="row">
                                    <div className="col-md-4 col-sm-12">
                                        <a href=""><img src="img/news (4).png" alt="" width="200px" /></a>
                                    </div>
                                    <div className="col-md-6 col-sm-12">
                                        <h5> <a href="" className="text-title"> Váy cao cấp Dior lấy cảm hứng từ bài
                                            Tarot...</a></h5>
                                        <p>
                                            Bộ sưu tập mới của Dior ra mắt bằng một bộ phim ngắn của đạo diễn Italy
                                            - Matteo
                                            Garrone,
                                            nằm trong khuôn khổ Tuần lễ thời trang cao cấp Paris mùa mốt Xuân Hè
                                            2021 diễn
                                            ra từ
                                            ngày 25 đến 29/1. Phim xoay quanh câu chuyện về một cô gái muốn khám phá
                                            bản
                                            thân.
                                            Trên
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <h3>Tin Tức</h3>
                            <img src="img/news (3).png" alt="" className="img-fluid" />
                            <h5 className="text-title-h5">
                                GIỢI Ý 4 LOCAL BRAND OUTFIT SIÊU ĐỈNH
                            </h5>
                            <p>
                                Đừng để một ngày của bạn nhàm chán với những bộ
                                đồ đã cũ. Cùng xem qua những Local Brand outfit
                                nổi bật sau để biết cách “thay máu” lại tủ đồ nhé.
                                “Hack chiều cao” với phong cách giấu quần Phong
                                cách giấu quần, […]
                            </p>
                        </div>
                    </div>
                </div>

            </div>
    </div>
  )
}

export default News