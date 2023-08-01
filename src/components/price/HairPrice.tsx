import React from "react";
import priceStyling from "../../styling/priceStyling.module.scss";

function HairPrice() {
  return (
    <>
      <div className={priceStyling.Container}>
        <div className={priceStyling.Wrapper}>
          <div className={priceStyling.Title}>Hair</div>
          <table>
            <tr className={priceStyling.HeadRow}>
              <th></th>
              <th>S</th>
              <th>M</th>
              <th>L</th>
            </tr>
            <tr className={priceStyling.SubRow}>
              <td>Shampoo & Blowdry</td>
              <td>22</td>
              <td>26</td>
              <td>28</td>
            </tr>
            <tr className={priceStyling.SubRow}>
              <td>Shampoo, cut & blowdry</td>
              <td>40</td>
              <td>45</td>
              <td>50</td>
            </tr>
            <tr className={priceStyling.SubRow}>
              <td>Add €5 for curly/boho</td>
            </tr>
            <tr className={priceStyling.SubRow}>
              <td>Colour (24hr path test required)</td>
            </tr>
            <tr className={priceStyling.SubRow}>
              <td>Tint & Blowdry</td>
              <td>60</td>
            </tr>
            <tr className={priceStyling.SubRow}>
              <td>Tint, Cut & blowdry</td>
              <td>75</td>
              <td>80</td>
            </tr>
            <tr className={priceStyling.SubRow}>
              <td>Tint + Floods & blowdry</td>
              <td>85</td>
              <td>90</td>
            </tr>
            <tr className={priceStyling.SubRow}>
              <td>Additional Colour</td>
              <td> </td>
              <td></td>
              <td>30</td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
}

export default HairPrice;
