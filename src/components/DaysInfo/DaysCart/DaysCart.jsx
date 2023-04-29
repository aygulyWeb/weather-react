import React from "react";
import classes from "./DaysCart.module.css";
import { useAppContext } from "../../../hook/useAppContext";

const DayCart = () => {
  const { daysData } = useAppContext(null);
  const { forecast } = daysData;
  const { forecastday } = forecast;

  console.log(forecastday);

  return (
    <>
      {forecastday.map((el, index) => (
        <div className={classes.dayCart} key={index}>
          <p className={classes.date}>{el.date}</p>
          <div>
            <img src={el.day.condition.icon} alt="#" className={classes.icon} />
          </div>

          <p className={classes.temp}>{el.day.maxtemp_c}°</p>
          <p className={classes.feelsLike}>{el.day.mintemp_c}°</p>
          <p className={classes.desc}>{el.day.condition.text}</p>
        </div>
      ))}
    </>
  );
};

export default DayCart;
