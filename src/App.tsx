import "./App.css";
import Category from "./components/Category";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Slideshow from "./components/Slideshow";

function App() {
  return (
    <>
      <div className="mainApp">
        <Navbar />
        <Slideshow />
        <Category />
        <Footer />
      </div>
    </>
  );
}

export default App;
