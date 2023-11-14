import { Link } from "react-router-dom";
import dermoBanStyle from "../../styling/DermalogicalBannerStyles.module.scss";

function DermalogicalBanner() {
  return (
    <>
      <div className={dermoBanStyle.BannerContainer}>
        <div className={dermoBanStyle.BannerText}>
          <div className={dermoBanStyle.BannerHeading}>
            Dermalogical Range Available
          </div>
          <div className={dermoBanStyle.BannerBtnContainer}>
            <Link to="/Dermalogica" className={dermoBanStyle.BannerBtn}>
              Browse Products
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default DermalogicalBanner;
