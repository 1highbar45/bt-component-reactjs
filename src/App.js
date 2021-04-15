import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header"
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Content from "./components/Content";

function App() {
    return (
        <div>
            <Header/>
            <Carousel/>
            <Content/>
            <Footer/>
        </div>
    );
}

export default App;
