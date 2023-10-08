import "./App.css";
import UpperNavbar from "./components/UpperNavbar/UpperNavbar";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import ProductListing from "./components/ProductListing/ProductListing";
import Footer from "./components/Footer/Footer";
import "../src/components/UpperNavbar/UpperNavbar.css";
import "./components/Navbar/Navbar.css";
import "./components/Home/Home.css";
import "./components/ProductCard/ProductCard.css";
import "./components/ProductListing/ProductListing.css";
import "./components/Footer/Footer.css";

function App() {
  return (
    <div>
      <Home>
        <UpperNavbar />
        <Navbar />
      </Home>
      <ProductListing />
      <Footer />
    </div>
  );
}

export default App;
