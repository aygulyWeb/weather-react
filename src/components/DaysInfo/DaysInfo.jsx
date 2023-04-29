import React from "react";
import classes from "./DaysInfo.module.css";
import DaysCart from "./DaysCart/DaysCart";
import { Button } from "../UI";
import { useAppContext } from "../../hook/useAppContext";
import { days } from "./days";

const WeekInfo = () => {
  const { handleSelectDay } = useAppContext(null);

  const selectDayHandleClick = (day) => {
    handleSelectDay(day);
  };

  return (
    <section className={classes.main}>
      <div className="container">
        <div className={classes.buttons}>
          {days?.map((item) => (
            <Button
              key={item.id}
              onClick={() => selectDayHandleClick(item.day)}
            >
              {item.name}
            </Button>
          ))}
        </div>
        <div className={classes.weekBlok}>
          <DaysCart />
        </div>
      </div>
    </section>
  );
};

export default WeekInfo;
