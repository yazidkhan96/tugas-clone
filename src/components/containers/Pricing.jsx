const Pricing = () => {
    return (
        <>
            <div className="pricing py-3 my-3" style={{ backgroundColor: "#eeeee4" }}>
                <div className="mt-5 text-center">
                    <h4 className="fw-bold">Pricing</h4>
                    <p>Pilih sistem pembayaran yang kamu sukai</p>
                </div>
                <div className="container d-flex flex-row justify-content-center">
                    <div className="row">
                        <div className="col-md d-flex justify-content-between">
                            <div className="card me-4 shadow" style={{ width: '320px' }}>
                                <div className="card-body p-4">
                                    <h5 className="card-title fw-bold mb-3 text-center">Free</h5>
                                    <p className="card-text lead text-center">Kami menyediakan banyak kelas gratis, kamu bisa memilih kelas gratis yang ingin kamu pelajari</p><br />
                                    <div className="d-flex flex-column align-items-center mt-5">
                                        <p className="text-center">Mulai dari</p>
                                        <h3 className="text-center">Rp. 0,-</h3>
                                    </div>
                                </div>

                            </div>
                            <div className="card me-4 shadow" style={{ width: '320px' }}>
                                <div className="card-body p-4">
                                    <h5 className="card-title fw-bold mb-3 text-center">Sekali Bayar</h5>
                                    <p className="card-text lead text-center">Kami menyediakan banyak kelas gratis, kamu bisa memilih kelas gratis yang ingin kamu pelajari</p><br />
                                    <div className="d-flex flex-column align-items-center mt-5">
                                        <p className="text-center">Mulai dari</p>
                                        <h3 className="text-center">Rp. 150.000,-</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="card shadow" style={{ width: '320px' }}>
                                <div className="card-body p-4">
                                    <h5 className="card-title fw-bold mb-3 text-center">VIP (Berlangganan)</h5>
                                    <p className="card-text lead text-center">Kami menyediakan banyak kelas gratis, kamu bisa memilih kelas gratis yang ingin kamu pelajari</p><br />
                                    <div className="d-flex flex-column align-items-center mt-5">
                                        <p className="text-center">Mulai dari</p>
                                        <h3 className="text-center">Rp. 150.000,-</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Pricing;