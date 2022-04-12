import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';
import { ProductType } from './types/product';
import { useNavigate } from 'react-router-dom';

type ProductAddProps = {
    onAdd: (product: ProductType) => void
}
type FormInputs = {
    name: string,
    price: number,
    img: string
}
const ProductAdd = (props: ProductAddProps) => {
    const { register, handleSubmit, formState} = useForm<FormInputs>();
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<FormInputs> = data => {
        props.onAdd(data);
        navigate('/admin/product')
    }
  return (
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">tên sản phẩm</label>
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  {...register('name', {required: true})}/>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">price</label>
            <input type="number" className="form-control" id="exampleInputPassword1"{...register('price')}  />
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">img</label>
            <input type="text" className="form-control" id="exampleInputPassword1"{...register('img')}/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}

export default ProductAdd