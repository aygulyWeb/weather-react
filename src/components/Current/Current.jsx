import React from "react";
import { useAppContext } from "../../hook/useAppContext";
import classes from "./Current.module.css";
import CurrentInfo from "./CurrentInfo/CurrentInfo";

const Current = () => {
  const { currentData } = useAppContext(null);
  return (
    <div className={classes.thisDayBlock}>
      <div className={classes.carts}>
        <div className={classes.thisDayContent}>
          <div className={classes.thisDayTexts}>
            <span className={classes.thisDayTemp}>
              {currentData.current.temp_c}°
            </span>
            <span className={classes.thisDayTitle}>Сегодня</span>
          </div>
          <div className={classes.thisDayImg}>
            <img
              src={currentData.current.condition.icon}
              className={classes.img}
              alt="#"
            />
          </div>
        </div>
        <div className={classes.thisDayText}>
          <p>Время: {currentData.location.localtime}</p>
          <p className={classes.thisDayCountry}>{currentData.location.name}</p>
        </div>
      </div>

      <CurrentInfo />
    </div>
  );
};

export default Current;
