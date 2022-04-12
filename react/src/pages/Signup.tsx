import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { signup } from '../api/auth';

type FormInputs = {
  name: string,
  email: string,
  password: string | number
}
const Signup = () => {
  const { register, handleSubmit, formState } = useForm<FormInputs>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormInputs> = data => {
    console.log(data)
    signup(data);
  }
  return (
    <form className="user" method="POST"onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <hr/>
        <input type="text"  className="form-control form-control-user" id="exampleFirstName" placeholder="Họ tên"{...register('name', {required: true})} />
      </div>
      <br/>
      <div className="form-group">
        <input type="text"  className="form-control form-control-user" id="exampleInputEmail" placeholder="Email" {...register('email', {required: true})}/>
      </div>
      <br/>
      <section style={{ color: 'red', marginBottom: 10 }} />
      <div className="form-group">
        <input type="text"  className="form-control form-control-user" id="exampleInputPassword" placeholder="Password" {...register('password', {required: true})}/>
      </div>
      <br/>
     
      <button className="btn btn-primary btn-user btn-block" type="submit" name="bnt-dk"> Đăng ký</button>
      
      <hr />
    </form>

  )
}

export default Signup