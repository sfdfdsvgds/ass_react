import React, { useEffect, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { read } from '../api/product';
import { ProductType } from './types/product';

type ProductEditProps = {
    onUpdate: (product: ProductType) => void
}
type FormInputs = {
    name: string,
    price: number,
    img: string
}
const ProductEdit = (props: ProductEditProps) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormInputs>();
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const getProduct = async () => {
            const { data } = await read(id);
            reset(data)
        }
        getProduct();
    }, [])

    const onSubmit: SubmitHandler<FormInputs> = data => {
        props.onUpdate(data);
        alert("update thành công")
        navigate('/admin/product')
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">tên sản phẩm</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  {...register('name', { required: true })} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">price</label>
                    <input type="number" className="form-control" id="exampleInputPassword1"{...register('price')} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">img</label>
                    <input type="text" className="form-control" id="exampleInputPassword1"{...register('img')} />
                </div>

                <button type="submit" className="btn btn-primary">Update</button>
            </form>
        </div>
    )
}

export default ProductEdit