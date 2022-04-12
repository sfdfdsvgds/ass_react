import React from 'react'
import { Table , Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ProductType } from '../pages/types/product'

type ProductManagerProps = {
  products: ProductType[],
  onRemove: (id: number) => void
}

const ProductManager = ({products, onRemove}: ProductManagerProps) => {
  return (
    <div>
      <a className="btn btn-primary" href='product/add'>Thêm mới</a>
      <br />
      <br />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name Product</th>
            <th>Pirce</th>
            <th>img</th>
            <th>delete</th>
            <th>edit</th>
           
            <th></th>
          </tr>
        </thead>
        <tbody>
        {products?.map((item, index) => {
            return <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td><img src={item.img} alt="" style={{maxWidth:"20%"}}/></td>
              <td>
                <button className='btn btn-primary' onClick={() => onRemove(item._id)}>Xóa</button>
              </td>
              <td>
              <Link className='btn btn-primary' to={`${item._id}/edit`}
              >Sửa</Link> 
              </td>
            </tr>
          })}
        </tbody>
      </Table>
    </div>
  )
}

export default ProductManager