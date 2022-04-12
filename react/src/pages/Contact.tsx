import React from 'react'

type Props = {}

const Contact = (props: Props) => {
  return (
    <div>
        <div className="content">
                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                            <h3>
                                Thông Tin Liên Hệ
                            </h3>
                            <nav>
                                <ul>
                                    <li>
                                        <div className="codd">
                                            <i className="fas fa-map-marked-alt" />
                                            <h5>
                                                Địa chỉ:
                                            </h5>
                                        </div>
                                        <p>17 an trai - vân canh - hoài đức- hà nội</p>
                                    </li>
                                    <li>
                                        <div className="codd">
                                            <i className="fas fa-envelope-open-text" />
                                            <h5>
                                                Email
                                            </h5>
                                        </div>
                                        <p>
                                            hanhbhph15007@fpt.edu.vn
                                        </p>
                                    </li>
                                    <li>
                                        <div className="codd">
                                            <i className="fas fa-mobile-alt" />
                                            <h5>
                                                Phone:
                                            </h5>
                                        </div>
                                        <p>
                                            098 098 7865- 097 532 43214321
                                        </p>
                                    </li>
                                    <li>
                                        <div className="codd">
                                            <i className="fas fa-book" />
                                            <h5>
                                                Thời gian làm việc:
                                            </h5>
                                        </div>
                                        <ul className="time">
                                            <li> từ thứ 2 - thứ 6 hàng tuần : 8h-20h</li>
                                            <li> thứ 7 và chủ nhật : 9h- 16h16h</li>
                                        </ul>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <h3>
                                Cung cấp cho chúng tôi một số thông tin!
                            </h3>
                            <p className="text-p">
                                Nếu bạn có thắc mắc gì, có thể gửi yêu cầu cho chúng tôi, và chúng tôi sẽ liên lạc với bạn sớm
                                nhất có thể.
                            </p>
                            <form action="" className="form-inp">
                                <input type="text" placeholder="tên của bạn..." />
                            </form>
                            <form action="" className="form-inp">
                                <input type="text" placeholder="ememail.." />
                                <input type="text" placeholder="địa chỉ..." />
                            </form>
                            <form action="" className="form-inp">
                                <input type="text" placeholder="nội dung phản hồi.." />
                            </form>
                            <button className="btn btn-outline-dark">gửi thông tin</button>
                        </div>
                    </div>
                </div>
    </div>
  )
}
export default Contact