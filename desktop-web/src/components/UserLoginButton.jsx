import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

export default function UserLoginButton() {
    
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  return isAuthenticated ? (
    <>
    <div className="dropdown">
    <button
      className="nav-link link dropdown-toggle" 
      data-bs-toggle="dropdown">
    {user.nickname}
    </button>
    <ul className="dropdown-menu">
          <li>
    <button
      className="nav-link link dropdown-item"
      onClick={() =>
        loginWithRedirect({appState: {returnTo: "/user-dashboard"}})
        }
        >
        Dashboard</button>
        </li>
      <li>
        <button 
          className="nav-link link dropdown-item" 
          onClick={() =>
            logout({logoutParams: {returnTo: window.location.origin}})
          }
          >
        Logout
        </button>
    </li>
        </ul>
        </div>
    </>

  ) : (
    <button 
        className="nav-link link" 
        onClick={() =>
            loginWithRedirect({appState: {returnTo: "/user-dashboard"}})
        }
        >
      Login
    </button>
  );
}
