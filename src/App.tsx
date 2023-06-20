import "./App.css";
import Category from "./components/Category";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Newproducts from "./components/Newproducts";
import Slideshow from "./components/Slideshow";

function App() {
  return (
    <>
      <div className="mainApp">
        <Navbar />
        <Slideshow />
        <Category />
        <Newproducts />
        <Footer />
      </div>
    </>
  );
}

export default App;
