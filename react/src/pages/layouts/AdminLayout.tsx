import React from 'react'
import { Outlet } from 'react-router-dom'
import Headeradmin from '../../components/Headeradmin'
type Props = {}

const AdminLayout = (props: Props) => {
  return (
    <div>
        <header>
          <Headeradmin/>
        </header>
        <aside>Xin trào</aside>
        <main>
           <Outlet />
        </main>
    </div>
  )
}

export default AdminLayout