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
          {servicesData.services.map((service) => (
            <>
              <button className={styles.serviceName}>{service.name}</button>
            </>
          ))}
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
