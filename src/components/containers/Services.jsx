import { faCertificate, faFlag, faList, faListAlt, faMoneyCheckAlt, faStopwatch, faUsers, faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Services = () => {
    return (
        <div className="container-fluid" style={{ backgroundColor: "#eeeee4" }}>
            <div className="row">
                <div className="col-md-6 d-flex flex-column justify-content-center">
                    <h3>Keuntungan yang Akan Kamu Dapatkan</h3>
                    <p>Apa sih keuntungan belajar di layanan daridasar.com ?</p>
                </div>
                <div className="col-md">
                    <div className="row mt-2 py-4">
                        <div className="col-md">
                            <span> <FontAwesomeIcon icon={faStopwatch} /></span><br />
                            <span className="lead">Waktu</span>
                            <p>Belajar bersama praktisi dibidangnya</p>
                        </div>
                        <div className="col-md">
                            <span> <FontAwesomeIcon icon={faUsers} /></span><br />
                            <span className="lead">Trainer</span>
                            <p>Kamu bebas menentukan waktu belajar kapan saja</p>
                        </div>
                        <div className="col-md">
                            <span> <FontAwesomeIcon icon={faCertificate} /></span><br />
                            <span className="lead">Certificate</span>
                            <p>Certificate</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md">
                            <span> <FontAwesomeIcon icon={faVideo} /></span><br />
                            <span className="lead">Video</span>
                            <p>Belajar menggunakan video dengan kualitas HD</p>
                        </div>
                        <div className="col-md">
                            <span> <FontAwesomeIcon icon={faListAlt} /></span><br />
                            <span className="lead">Case Studi</span>
                            <p>Belajar dengan studi kasus</p>
                        </div>
                        <div className="col-md">
                            <span> <FontAwesomeIcon icon={faList} /></span><br />
                            <span className="lead">Dari Dasar</span>
                            <p>Materi belajar dimulai dari dasar.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md">
                            <span> <FontAwesomeIcon icon={faFlag} /></span><br />
                            <span className="lead">Guarantee</span>
                            <p>Garansi uang kembali jika dalam 7 hari merasa kelas nya tidak cocok</p>
                        </div>
                        <div className="col-md">
                            <span> <FontAwesomeIcon icon={faMoneyCheckAlt} /></span><br />
                            <span className="lead">Pricing</span>
                            <p>Kamu bebas memilih untuk sekali bayar atau dengan berlangganan</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;