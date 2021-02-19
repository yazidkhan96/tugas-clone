import About from "./components/containers/About";
import CategoryCards from "./components/containers/CategoryCards";
import Footer from "./components/containers/Footer";
import Jumbotron from "./components/containers/Jumbotron";
import Navbar from "./components/containers/Navbar";
import Quote from "./components/containers/Quote";

const Kelas = () => {
    return (
        <>
            <Navbar />
            <Jumbotron />
            <CategoryCards />
            <Quote />
            <About />
            <Footer />
        </>
    );
}

export default Kelas;