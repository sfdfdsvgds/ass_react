import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Banner from '../../components/Banner'

type Props = {}

const WebsiteLayout = (props: Props) => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <Banner/>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default WebsiteLayout