import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Services from "./components/Services";


import "../src/styles/App.scss";
import "../src/styles/header.scss";
import "../src/styles/home.scss";
import "../src/styles/footer.scss";
import "../src/styles/contact.scss";
import "../src/styles/media.scss";


function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/services" element={<Services/>} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
