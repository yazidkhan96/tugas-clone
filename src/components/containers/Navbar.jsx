import { NavLink } from 'react-router-dom';
const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
                <div className="container-fluid">
                    <NavLink to="/" className="text-decoration-none">
                        <img src="https://avatars3.githubusercontent.com/u/22560475?s=460&u=e3a75f127d63e2a4bf7005c939fbb77ca7eb673f&v=4" alt="daridasar.com" height="64" width="64" />
                        <a className="navbar-brand fs-6 mx-3">daridasar.com</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </NavLink>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to="/kelas" className="text-decoration-none">
                                    <a className="nav-link">Kelas</a>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Buku</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Blog</a>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link">Login</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link btn btn-primary rounded-pill text-white">Get Started</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    );
}

export default Navbar;