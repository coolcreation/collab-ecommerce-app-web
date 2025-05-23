import { useAuth0 } from "@auth0/auth0-react";

export default function UserLoginButton() {
    
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  return isAuthenticated ? (
    <button 
        className="nav-link link" 
        onClick={() =>
            logout({logoutParams: {returnTo: window.location.origin}})
        }
        >
      Logout
      <br></br>
      Hi, {user.nickname}
    </button>
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
