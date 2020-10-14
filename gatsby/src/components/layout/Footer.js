import React from 'react'
import InstagramPosts from './InstagramPosts'

export default function Footer({ children, ...rest }) {
  return (
    <footer {...rest}>
      <InstagramPosts />
      {children}
    </footer>
  )
}
