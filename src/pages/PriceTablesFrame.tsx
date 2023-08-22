import priceStyling from "../styling/priceStyling.module.scss";
import Navbar from "../components/global/Navbar";
import HairPrice from "../components/price/HairPrice";

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
