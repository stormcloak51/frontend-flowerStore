import React from "react"
import ContentLoader from "react-content-loader"
import styles from './Home.module.scss'

export default function MyLoader(props) {
  return (
    <ContentLoader 
      speed={1}
      width={250}
      height={404}
      className={styles.item_skeleton}
      viewBox="0 0 250 404"
      backgroundColor="#a4ab85"
      foregroundColor="#e9f2bd"
      {...props}
    >
      <rect x="0" y="250" rx="14" ry="14" width="247" height="27" /> 
      <rect x="2" y="294" rx="24" ry="24" width="244" height="42" /> 
      <rect x="4" y="411" rx="13" ry="13" width="275" height="29" /> 
      <rect x="1" y="5" rx="42" ry="42" width="237" height="226" /> 
      <rect x="1" y="350" rx="14" ry="14" width="247" height="27" />
    </ContentLoader>
  )
}
