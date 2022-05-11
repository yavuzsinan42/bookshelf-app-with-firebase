import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
      <h1>YSA Bookshelf App</h1>
      <ul>
        <li><Link to="/">Anasayfa</Link></li>
        <li><Link to="/login">Giriş</Link></li>
        <li><Link to="/signup">Üye Ol</Link></li>
        <li>Çıkış</li>
      </ul>
    </nav>
  )
}