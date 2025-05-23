import { Link } from "react-router-dom";
import UserLoginButton from "../users/components/UserLoginButton";


export default function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-black navbar-dark px-2 px-lg-3">
            <div className="container-fluid">

                <Link to="/" className="nav-link">
                    <img src={'./vite.svg'} alt="" />
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav w-100 align-items-lg-center bg-black">

                    {/* <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li> */}


                    <Link to="/" className="nav-link link">
                        Home
                    </Link>


                    {/* <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                        </ul>
                    </li> */}

                    <Link to="/admin" className="nav-link ms-0 ms-lg-auto">
                        <img src={"./admin-icon.png"} alt="" width="30" />
                    </Link>

                    <UserLoginButton/>


                </ul>

                </div>
            </div>
        </nav>
    </div>
  )
}
