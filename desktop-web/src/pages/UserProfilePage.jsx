import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

export default function UserProfilePage () {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
 <div className="main-container">
        <div className="container">
        <h2>{user.name}</h2>
        <p>{user.nickname}</p>
        <p>{user.email}</p>
        <Link to='/user-dashboard' className="btn btn-primary">Back</Link>
      </div>
      </div>
    )
  );
};

