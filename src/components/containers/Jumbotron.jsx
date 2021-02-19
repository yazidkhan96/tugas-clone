import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../css/Jumbtron.style.css";


const Jumbotron = () => {
    return (
        <>
            <div className="jumbotron jumbotron-image">
                <div className="container">
                    <div className="d-flex flex-row justify-content-center">
                        <h1 className="display-3">Belajar Pemograman</h1>
                    </div>

                    <p className="display-4 align-items-center">daridasar.com</p>
                    <span className="lead deskripsi">Mulai Karirmu di dunia programming dengan belajar</span><br />
                    <span className="lead deskripsi">pemrogramman bersama kami mulai dari dasar</span>
                    <div className="d-flex flex-row justify-content-center mt-2">
                        <input className="form-control form-control-md" type="text" placeholder="Search..." />
                        <button className="btn btn-light" type="button" id="button-addon2">                    <FontAwesomeIcon icon={faSearch} style={{ fontSize: '28px' }} className="icon-search" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Jumbotron;