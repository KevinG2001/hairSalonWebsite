import React from 'react'
import footerStyles from "../styling/footerStyles.module.scss"

function Footer() {
  return (
    <>
        <div className={footerStyles.footerContainer}>
            <div className={footerStyles.footerContentWrapper}>
                <div className={footerStyles.footerContentPanel}>
                    <div>SHOP NOW</div>
                    <div>haircare</div>
                </div>
                <div className={footerStyles.footerContentPanel}>
                    <div>LOGO</div>
                    <div>Adress, Dublin what ever</div>
                    <div>Number</div>
                </div>
                <div className={footerStyles.footerContentPanel}>
                    <div>SITE INFO</div>
                    <div>Home</div>
                    <div>dermalogica</div>
                    <div>delivery & returns policy</div>
                </div>
            </div>
            {/* NEED TO ADD 2 BUTTONS AND FOLLOW US */}
        </div>
    </>
  )
}

export default Footer
