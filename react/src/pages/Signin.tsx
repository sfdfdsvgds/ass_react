import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { signin, signup } from '../api/auth';

type FormInputs = {
  name: string,
  email: string,
  password: string | number
}
const Signin = () => {
  const { register, handleSubmit, formState } = useForm<FormInputs>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormInputs> = async data => {
    const { data: user } = await signin(data);
    localStorage.setItem('user', JSON.stringify(user))
    navigate('/admin/product')
  }
  return (
    <form action="" method="POST" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <input type="email" className="form-control form-control-user" id="exampleInputEmail"  aria-describedby="emailHelp" placeholder="Nhập email..."{...register('email', {required: true})} />
      </div>
      <br/>
      <div className="form-group">
        <input type="password" className="form-control form-control-user"  id="exampleInputPassword" placeholder="Nhập mật khẩu"{...register('password', {required: true})} />
      </div>
      <section />
      <br/>
      <div className="form-group">
        <div className="custom-control custom-checkbox small">
          <input type="checkbox" className="custom-control-input" id="customCheck" />
          <label className="custom-control-label" htmlFor="customCheck">Remember
            Me</label>
        </div>
      </div>
      <input type="submit" name="dangnhap" className="btn btn-primary btn-user btn-block" defaultValue="Đăng nhập" />
      <div style={{ display: 'flex', marginTop: 20 }}>
        <p style={{ marginTop: 10 }}>Nếu chưa có tài khoản hãy chọn đăng ký!!</p>
        <a className="btn btn-primary" href="Signup">Đăng ký</a>
      </div> 
    </form>
  )
}

export default Signin