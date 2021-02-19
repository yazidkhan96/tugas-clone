import About from "./components/containers/About";
import Course from "./components/containers/Course";
import Footer from "./components/containers/Footer";
import Jumbotron from "./components/containers/Jumbotron";
import Navbar from "./components/containers/Navbar";
import Pricing from "./components/containers/Pricing";
import Quote from "./components/containers/Quote";
import SectionInfo from "./components/containers/SectionInfo";
import Services from "./components/containers/Services";
const HomePage = () => {
    return (
        <>
            <Navbar />
            <Jumbotron />
            <SectionInfo />
            <Services />
            <div className="text-center mt-5">
                <h4 className="fw-bold">Mulai Bersama daridasar.com</h4>
                <p className="lead">Platform belajar yang dapat membantumu belajar apapun dari dasar</p>
            </div>
            <Course /><br />
            <Course />
            <Pricing />
            <Quote />
            <About />
            <Footer />
        </>
    );
}

export default HomePage;