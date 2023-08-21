import priceStyling from "../styling/priceStyling.module.scss";
import Navbar from "./global/Navbar";
import HairPrice from "./price/HairPrice";

function PriceTables() {
  return (
    <>
      <Navbar />
      <div className={priceStyling.Container}>
        <div className={priceStyling.Wrapper}>
          <HairPrice />
        </div>
      </div>
    </>
  );
}

export default PriceTables;
