import "./App.css";
import Category from "./components/Category";
import Navbar from "./components/Navbar";
import Slideshow from "./components/Slideshow";

function App() {
  return (
    <>
      <div className="mainApp">
        <Navbar />
        <Slideshow />
        <Category />
      </div>
    </>
  );
}

export default App;
