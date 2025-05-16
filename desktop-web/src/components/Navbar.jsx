import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src={'./vite.svg'} alt="" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100">

                    {/* <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li> */}


                    <Link to="/" className="nav-link">
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

                    <Link to="/admin" className="ms-auto">
                        <img src={"./admin-icon.png"} alt="" width="30" />
                    </Link>

                </ul>

                </div>
            </div>
        </nav>
    </div>
  )
}
