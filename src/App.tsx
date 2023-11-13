import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/HomeFrame";
import ProductDetails from "./components/ProductDetails";
import AllProductFrame from "./pages/AllProductFrame";
import DisplayBrands from "./components/DisplayBrands";
import PriceTables from "./pages/PriceTablesFrame";
import DisplayProductsBranded from "./components/DisplayProductsByBrand";
import styles from "./styling/AppStyling.module.scss";
import Booking from "./pages/booking/Booking";

function App() {
  return (
    <Router>
      <div className={styles.mainApp}>
        <Routes>
          {/* Navbar links */}
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/services-price" element={<PriceTables />} />

          {/* Picture links etc... */}
          {/* Shows all products */}
          <Route path="/products" element={<AllProductFrame />} />
          {/* Shows specific product details */}
          <Route path="/products/:productname" element={<ProductDetails />} />
          {/* Shows the brands of the categorys when a cateogyr is clicked on homepage */}
          <Route path="/:category" element={<DisplayBrands />} />
          {/* Shows the products from the brand that was clicked */}
          <Route
            path="/:category/:brand"
            element={<DisplayProductsBranded />}
          />
          {/* Shows the price of services */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
