import React from "react";
import classes from "./Header.module.css";
import { ReactComponent as HeaderIcon } from "../../assets/icons/Header_logo.svg";
import png from "../../assets/icons/Vector.png";
import { useAppContext } from "../../hook/useAppContext";
import { cities } from "./data/cities";

const Header = () => {
  const { toggleChange, setCity } = useAppContext();

  return (
    <div className={classes.header}>
      <div className={classes.headerBlock}>
        <HeaderIcon />
        <div className={classes.headerLogo}>React Weather</div>
      </div>
      <div className={classes.headerBlock}>
        <img src={png} alt="logo" onClick={toggleChange} />
        <select
          value={cities.name}
          className={classes.headerSelect}
          onChange={(e) => setCity(e.target.value)}
        >
          <option disabled>Выбрать город</option>
          {cities.map((el) => (
            <option key={el.id} value={el.value}>
              {el.value}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Header;
