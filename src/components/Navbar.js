import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";

export default function Navbar() {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  //console.log("Navbar", user);
  return (
    <nav>
      <h1>YSA Bookshelf App</h1>
      <ul>
        <li>
          <Link to="/">Anasayfa</Link>
        </li>
        {!user && (
          <li>
            <Link to="/login">Giriş</Link>
          </li>
        )}
        {!user && (
          <li>
            <Link to="/signup">Üye Ol</Link>
          </li>
        )}
        {user && <li onClick={logout}>Çıkış</li>}
      </ul>
    </nav>
  );
}
