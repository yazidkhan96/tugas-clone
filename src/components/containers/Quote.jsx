import "../css/Qoute.style.css";
const Quote = () => {
    return (
        <>
            <div className="jumbotron jumbotron-quote mt-5">
                <div className="container-fluid"><br /><br /><br />
                    <div className="d-flex flex-column p-2">
                        <p className="fs-4 lh-sm text-white">"Jika kamu tidak sanggup menahan lelahnya belajar maka kamu</p>
                        <p className="fs-4 lh-sm text-white">harus sanggup menahan perihnya kebodohan"</p>
                        <div className="d-flex">
                            <p className="text-white">Imam Syafi'i</p>
                            <btn className="btn btn-primary rounded-pill ms-auto text-white">Get Started</btn>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Quote;