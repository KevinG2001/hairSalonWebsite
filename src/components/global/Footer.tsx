import footerStyles from "../../styling/footerStyles.module.scss";
import facebookImg from "../../assets/socialImages/facebookImg.svg";
import instagramImg from "../../assets/socialImages/instagramImg.svg";
import logo from "../../assets/debonair-logo.svg";

function Footer() {
  return (
    <>
      <div className={footerStyles.footerContainer}>
        <div className={footerStyles.footerContentWrapper}>
          <div className={footerStyles.footerContentPanel}>
            <div className={footerStyles.footerTitle}>SHOP NOW</div>
            <div className={footerStyles.footerMenu}>
              <div>Haircare</div>
            </div>
            <button>Show all products</button>
          </div>
          <div className={footerStyles.footerContentPanel} id={footerStyles.middle}>
            <img src={logo} alt="" className={footerStyles.footerLogo}/>
            <div className={footerStyles.footerContact}>
              <div>15 Random Address<br />Dublin, 12</div>
              <div>(01) 319 1412</div>
            </div>
            <div className={footerStyles.footerSocialWrapper}>
              <div>Follow Us</div>
              <div className={footerStyles.footerSocialHolder}>
                <img
                  src={facebookImg}
                  alt=""
                  className={footerStyles.footerImg}
                />
                <img
                  src={instagramImg}
                  alt=""
                  className={footerStyles.footerImg}
                />
              </div>
              </div>
            </div>
          <div className={footerStyles.footerContentPanel}>
            <div className={footerStyles.footerTitle}>SITE INFO</div>
            <div className={footerStyles.footerMenu}>
              <div>Home</div>
              <div>Dermalogica</div>
              <div>delivery & returns</div>
            </div>
            <button>book now</button>
            </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
