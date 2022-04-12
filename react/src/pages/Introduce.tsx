import React from 'react'

type Props = {}

const Introduce = (props: Props) => {
  return (
    <div>
        <div className="container">
                <div className="bar">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="#">Trang Chủ</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Giới Thiệu</li>
                        </ol>
                    </nav>
                </div>

                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <a href=""><img src="./img/YEOROE.jpg" alt="" className="img-fluid"/></a>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <h3>
                            Giới Thiệu
                        </h3>
                        <p>
                            Trang giới thiệu giúp khách hàng hiểu rõ hơn về cửa hàng của bạn. Hãy cung cấp thông tin cụ thể
                            về việc kinh doanh, về cửa hàng, thông tin liên hệ. Điều này sẽ giúp khách hàng cảm thấy tin
                            tưởng khi mua hàng trên website của bạn.
                            Gói thiết kế chủ đề cung cấp một bộ chủ đề Magento hoàn chỉnh cho cửa hàng trực tuyến của bạn
                            theo chủ đề mong muốn của bạn. Điều này bao gồm tất cả các chủ đề Magento được yêu cầu để triển
                            khai thành công trên cửa hàng trực tuyến của bạn.

                        </p>
                        <p>
                            Ngày càng nhiều người Việt Nam sử dụng hàng cao cấp đắt tiền, không chỉ vì cái đẹp tinh tế,
                            phong cách khác biệt, mà còn ở bản thân giá trị của thương hiệu đó. Đặt một món đồ hiệu kế bên
                            đồ phổ thông, sẽ rất dễ dàng để nhận ra sự khác biệt đẳng cấp, từ những điểm nhỏ nhặt nhất. Đôi
                            khi chỉ là một logo hết sức đơn giản như dấu Swoosh của Nike chẳng hạn, đơn giản đến mức hoàn
                            hảo
                        </p>


                        <h5>
                            Một vài gợi ý cho nội dung trang Giới thiệu:
                        </h5>
                        <nav>
                            <ul>
                                <li> Bạn là ai </li>
                                <li> Giá trị kinh doanh của bạn là gì</li>
                                <li> Địa chỉ cửa hàng</li>
                                <li> Bạn đã kinh doanh trong ngành hàng này bao lâu rồi</li>
                                <li> Đội ngũ của bạn gồm những ai</li>
                                <li> Thông tin liên hệ</li>
                                <li> Liên kết đến các trang mạng xã hội (Twitter, Facebook)</li>
                                <li> Bạn kinh doanh ngành hàng online được bao lâu</li>
                                <li>Bạn có thể chỉnh sửa hoặc xoá bài viết này tại đây hoặc thêm những bài viết mới trong
                                    phần quản lý</li>
                            </ul>
                        </nav>

                    </div>
                </div>
            </div>
    </div>
  )
}

export default Introduce