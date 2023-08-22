import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/HomeFrame";
import ProductDetails from "./components/Products/ProductDetails";
import AllProductFrame from "./pages/AllProductFrame";
import DisplayBrands from "./components/Products/DisplayBrands";
import PriceTables from "./pages/PriceTablesFrame";
import DisplayProductsBranded from "./components/Products/DisplayProductsByBrand";

function App() {
  return (
    <Router>
      <div className="mainApp">
        <Routes>
          <Route path="/" element={<Home />} />
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
          <Route path="/services-price" element={<PriceTables />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
