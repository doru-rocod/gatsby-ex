import React from "react"
import Layout from "../components/layout"

import styles from "../components/blog.module.css"

const blog = () => {
  return (
    <Layout>
      <div className={styles.page}>
        <h1>This is our Blog page</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta,
          distinctio architecto esse molestiae neque natus quasi laborum
          consectetur nisi reprehenderit aperiam praesentium id illum
          necessitatibus. Facere quidem commodi obcaecati exercitationem.
        </p>
      </div>
    </Layout>
  )
}

export default blog
