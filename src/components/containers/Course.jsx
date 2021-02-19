import Slider from "react-slick";
import '../css/Course.style.css';
import Picture from "../images/pictureCode.jpg";
const Course = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 100,
        slidesToShow: 5,
        slidesToScroll: 1
    };
    return (
        <>
            <div>
                <div className="d-flex">
                    <h2 className="lead mb-3">Course</h2>
                    <p className="ms-auto lead">Read More &rarr;</p>
                </div>
                <Slider {...settings}>
                    <div>
                        <div className="card me-5 border-2 rounded-3 shadow">
                            <img src={Picture} className="card-img-top rounded-3" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text lead">lampungdev</p>
                                <p className="card-text fw-bold">Rp300.000</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card me-5 border-2 rounded-3">
                            <img src={Picture} className="card-img-top rounded-3" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text lead">lampungdev</p>
                                <p className="card-text fw-bold">Rp300.000</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card me-5 border-2 rounded-3">
                            <img src={Picture} className="card-img-top rounded-3" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text lead">lampungdev</p>
                                <p className="card-text fw-bold">Rp300.000</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card me-5 border-2 rounded-3">
                            <img src={Picture} className="card-img-top rounded-3" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text lead">lampungdev</p>
                                <p className="card-text fw-bold">Rp300.000</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card me-5 border-2 rounded-3">
                            <img src={Picture} className="card-img-top rounded-3" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text lead">lampungdev</p>
                                <p className="card-text fw-bold">Rp300.000</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card me-5 border-2 rounded-3">
                            <img src={Picture} className="card-img-top rounded-3" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text lead">lampungdev</p>
                                <p className="card-text fw-bold">Rp300.000</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card me-5 border-2 rounded-3 shadow">
                            <img src={Picture} className="card-img-top rounded-3" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text lead">lampungdev</p>
                                <p className="card-text fw-bold">Rp300.000</p>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </>
    );
}

export default Course;