const Footer = () => {
    const getYear = () => {
        return new Date().getFullYear();
    }
    return (
        <div className="container-fluid mt-5">
            <hr />
            <div className="p-3 text-center">
                <p>&copy; <b className="text-footer">daridasar.com</b> by <b className="text-footer">YazidAkbar</b> 2020 - {getYear()}</p>
            </div>
        </div>
    );
}

export default Footer;