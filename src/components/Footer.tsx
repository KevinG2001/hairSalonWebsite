import React from 'react'
import footerStyles from "../styling/footerStyles.module.scss"
import facebookImg from "../assets/socialImages/facebookImg.svg"
import instagramImg from "../assets/socialImages/instagramImg.svg"

function Footer() {
  return (
    <>
        <div className={footerStyles.footerContainer}>
            <div className={footerStyles.footerContentWrapper}>
                <div className={footerStyles.footerContentPanel}>
                    <div className={footerStyles.footerTitle}>SHOP NOW</div>
                    <div className={footerStyles.footerContent}>haircare</div>
                </div>
                <div className={footerStyles.footerContentPanel}>
                    <div className={footerStyles.footerTitle}>LOGO</div>
                    <div className={footerStyles.footerContent}>15 Random Address</div>
                    <div className={footerStyles.footerContent}>Dublin what ever</div>
                    <div className={footerStyles.footerContent}>01 319 1412</div>
                </div>
                <div className={footerStyles.footerContentPanel}>
                    <div className={footerStyles.footerTitle}>SITE INFO</div>
                    <div className={footerStyles.footerContent}>Home</div>
                    <div className={footerStyles.footerContent}>dermalogica</div>
                    <div className={footerStyles.footerContent}>delivery & returns policy</div>
                </div>
            </div>
            <div className={footerStyles.footerContentWrapper}>
                <div className={footerStyles.footerContentPanel}>
                    <button>
                        Show all products
                    </button>
                </div>
                <div className={footerStyles.footerContentPanel}>
                    <div className={footerStyles.footerTitle}>
                        Follow Us
                    </div>
                    <div className={footerStyles.footerSocialHolder}>
                        <img src={facebookImg} alt="" className={footerStyles.footerImg}/>
                        <img src={instagramImg} alt="" className={footerStyles.footerImg}/>
                    </div>
                </div>
                <div className={footerStyles.footerContentPanel}>
                    <button>
                        book now
                    </button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer
