import { useState } from "react";
import Navbar from "../../components/global/Navbar";
import servicesData from "../../data/services.json";
import styles from "../../styling/pages/bookingStyles.module.scss";

function Booking() {
  const [buttonSelected, setbuttonSelected] = useState(false);
  const [serviceName, setServiceName] = useState<string | null>(null);

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (e.target instanceof HTMLElement) {
      const clickedServiceName = e.target.innerText;
      setServiceName(clickedServiceName);
      setbuttonSelected(!buttonSelected);
    }
    return (
      <>
        <Navbar />
        <div className={styles.container}>
          <div className={styles.sidebar}>
            <div className={styles.sidebarBox}>
              {servicesData.services.map((service) => (
                <>
                  <button
                    onClick={handleButtonClick}
                    className={styles.serviceName}
                    key={service.id}
                  >
                    {service.name}
                  </button>
                </>
              ))}
            </div>
            <div className={styles.sidebarBox}>
              {servicesData["Add-Ons"].map((addon) => (
                <>
                  <button
                    key={addon.id}
                    onClick={(e) => handleButtonClick(e)}
                    className={styles.serviceName}
                  >
                    {addon.name}
                  </button>
                </>
              ))}
            </div>
          </div>
          <div className={styles.content}>
            {buttonSelected ? (
              <>
                {servicesData.services
                  .find((service) => service.name === serviceName)
                  ?.options?.map((option) => (
                    <div className={styles.optionsBar}>
                      <div className={styles.barSplitter}>
                        <div className={styles.optionName} key={option.name}>
                          {option.name}
                        </div>
                      </div>
                      <div className={styles.barSplitter}>
                        <select>
                          {option.worker.map((worker) => (
                            <option>{worker}</option>
                          ))}
                        </select>
                        <button>Book Now</button>
                      </div>
                    </div>
                  ))}

                {servicesData["Add-Ons"]
                  .find((addon) => addon.name === serviceName)
                  ?.options?.map((option) => (
                    <div className={styles.optionsBar}>
                      <div className={styles.barSplitter}>
                        <div className={styles.optionName} key={option.name}>
                          <option value="" key={option.name}>
                            {option.name}
                          </option>
                        </div>
                      </div>
                      <div className={styles.barSplitter}>
                        <select className={styles.selector}>
                          {option.worker.map((worker) => (
                            <option>{worker}</option>
                          ))}
                        </select>
                        <button>Book Now</button>
                      </div>
                    </div>
                  ))}
              </>
            ) : (
              <>
                <div>
                  View your booking history to rebook or amend an appointment
                </div>
                <div>Or choose a category to see our list of services</div>
              </>
            )}
          </div>
        </div>
      </>
    );
  };
}
export default Booking;
