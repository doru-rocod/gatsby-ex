import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"

import layout from "./layout.css"

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
