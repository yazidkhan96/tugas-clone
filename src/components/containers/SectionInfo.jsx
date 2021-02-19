import { faClock, faList, faUser, faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const SectionInfo = ({ icon, visitor, description }) => {
    return (
        <div className="container-fluid mt-5">
            <div className="row">
                <div className="col-md-3 text-center">
                    <p> <FontAwesomeIcon icon={faList} style={{ fontSize: '28px' }} /></p>
                    <p>90 +</p>
                    <p>Belajar dengan 40 lebih  course tersedia</p>
                </div>
                <div className="col-md-3  text-center">
                    <p><FontAwesomeIcon icon={faVideo} style={{ fontSize: '28px' }} /></p>
                    <p className="text-visitor">2000 +</p>
                    <p>Memiliki lebih dari 2000 video</p>
                </div>
                <div className="col-md-3  text-center">
                    <p><FontAwesomeIcon icon={faClock} style={{ fontSize: '28px' }} /></p>
                    <p>15.000 +</p>
                    <p>Total waktu lebih dari 15.000 jam</p>
                </div>
                <div className="col-md-3  text-center">
                    <p><FontAwesomeIcon icon={faUser} style={{ fontSize: '28px' }} /></p>
                    <p>1.000.000 +</p>
                    <p>Bergabung bersama lebih dari 1.000.000+ Member</p>
                </div>
            </div>
        </div>
    );
}

export default SectionInfo;