import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";

function App() {
    return (
        <>
            <Navbar title="one" About="About Us" />
            <div className="container my-3 ">
                <TextForm heading="Enter The Text To Analyze below" />
                <About />
            </div>
        </>
    );
}

export default App;
