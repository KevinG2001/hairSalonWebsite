import React from "react";
import priceStyling from "../../styling/priceStyling.module.scss";

function HairPrice() {
  return (
    <>
      <div className={priceStyling.Container}>
        <div className={priceStyling.Wrapper}>
          Hair
          <table>
            <tr>
              <th>Blank</th>
              <th>S</th>
              <th>M</th>
              <th>L</th>
            </tr>
            <tr>
              <td>Shampoo & Blowdry</td>
              <td>22</td>
              <td>26</td>
              <td>28</td>
            </tr>
            <tr>
              <td>Shampoo, cut & blowdry</td>
              <td>40</td>
              <td>45</td>
              <td>50</td>
            </tr>
            <tr>
              <td>Add €5 for curly/boho</td>
            </tr>
            <tr>
              <td>Colour (24hr path test required)</td>
            </tr>
            <tr>
              <td>Tint & Blowdry</td>
              <td>60</td>
            </tr>
            <tr>
              <td>Tint, Cut & blowdry</td>
              <td>75</td>
              <td>80</td>
            </tr>
            <tr>
              <td>Tint + Floods & blowdry</td>
              <td>85</td>
              <td>90</td>
            </tr>
            <tr>
              <td>Additional Colour</td>
              <td></td>
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
