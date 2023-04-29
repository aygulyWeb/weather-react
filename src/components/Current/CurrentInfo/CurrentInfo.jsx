import React from "react";
import { useAppContext } from "../../../hook/useAppContext";
import classes from "./CurrentInfo.module.css";
import temp from "../../../assets/icons/thermometer.png";
import humidity from "../../../assets/icons/humidity.png";
import evaporator from "../../../assets/icons/evaporator.png";
import wind from "../../../assets/icons/wind.png";

const CurrentInfo = () => {
  const { currentData } = useAppContext();

  return (
    <div className={classes.thisDayInfoBlock}>
      <div className={classes.thisDayItems}>
        <div className={classes.thisDayIcons}>
          <img src={temp} alt="#" />
        </div>
        <p className={classes.thisDayInfo}>Температура</p>
        <p className={classes.thisDayFeels}>
          {currentData.current.temp_c}° ощущается как{" "}
          {currentData.current.feelslike_c} °
        </p>
      </div>
      <div className={classes.thisDayItems}>
        <div className={classes.thisDayIcons}>
          <img src={humidity} alt="#" />
        </div>
        <p className={classes.thisDayInfo}>Давление</p>
        <p className={classes.thisDayFeels}>
          {currentData.current.humidity} мм ртутного столба - нормальное
        </p>
      </div>
      <div className={classes.thisDayItems}>
        <div className={classes.thisDayIcons}>
          <img src={evaporator} alt="#" />
        </div>
        <p className={classes.thisDayInfo}>Осадки</p>
        <p className={classes.thisDayFeels}>
          {currentData.current.condition.text}
        </p>
      </div>
      <div className={classes.thisDayItems}>
        <div className={classes.thisDayIcons}>
          <img src={wind} alt="#" />
        </div>
        <p className={classes.thisDayInfo}>Ветер</p>
        <p className={classes.thisDayFeels}>
          {currentData.current.wind_mph} м/с юго-запад - легкий ветер
        </p>
      </div>
    </div>
  );
};

export default CurrentInfo;
