import React from "react";
import Navbar from "../../components/global/Navbar";
import servicesData from "../../data/services.json";
import styles from "../../styling/pages/bookingStyles.module.scss";

function Booking() {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.sidebar}>
          <div className={styles.sidebarBox}>
            {servicesData.services.map((service) => (
              <>
                <button className={styles.serviceName}>{service.name}</button>
              </>
            ))}
          </div>
          <div className={styles.sidebarBox}>
            <button className={styles.serviceName}>Add On</button>
            {servicesData["Add-Ons"].map((addon) => (
              <>
                <button className={styles.serviceName}>{addon.name}</button>
              </>
            ))}
          </div>
        </div>
        <div className={styles.content}>
          <div>View your booking history to rebook or amend an appointment</div>
          <div>Or choose a category to see our list of services</div>
        </div>
      </div>
    </>
  );
}

export default Booking;

// {servicesData.services.map((service) => (
//     <>
//       <div>{service.name}</div>
//       {service.options.map((option) => (
//         <>
//           <div>{option.name}</div>
//         </>
//       ))}
//     </>
//   ))}
