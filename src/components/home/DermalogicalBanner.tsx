import React from 'react'
import dermoBanStyle from "../../styling/DermalogicalBannerStyles.module.scss"

function DermalogicalBanner() {
  return (
    <>
    <div className={dermoBanStyle.BannerContainer}>
        <div className={dermoBanStyle.BannerText}>
            <div className={dermoBanStyle.BannerHeading}>
                Dermalogical Range Available
            </div>
            <div className={dermoBanStyle.BannerBtnContainer}>
                <button className={dermoBanStyle.BannerBtn}>Browse Products</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default DermalogicalBanner
