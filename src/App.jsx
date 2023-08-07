import React from "react";
import { Header, Current, DaysInfo } from "./components";
import axios from "axios";
import { AppContext } from "./store/AppContext";

const App = () => {
  const [currentData, setCurrentData] = React.useState(null);
  const [daysData, setDaysData] = React.useState(null);
  const [tenDayData, setTenDayData] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [theme, setTheme] = React.useState("dark-theme");

  const [city, setCity] = React.useState("Nukus");
  const [selectDay, setSelectDay] = React.useState(3);

  const toggleChange = () => {
    setTheme((prev) => (prev === "dark-theme" ? "light-theme" : "dark-theme"));
  };

  const getCurrentWeather = async (name) => {
    try {
      setLoading(true);
      const res = await axios.get(
        `http://api.weatherapi.com/v1/current.json?key=13b261a84cec405299443108232004&q=${name}&aqi=no`
      );

      if (res.status !== 200) {
        throw new Error("Error!");
      }
      if (res.status === 200) {
        setCurrentData(res.data);
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    if (city) {
      getCurrentWeather(city);
    }
  }, [city]);

  const getWeekWeather = async (city, day) => {
    try {
      setLoading(true);
      const res = await axios.get(`
    	  http://api.weatherapi.com/v1/forecast.json?key=13b261a84cec405299443108232004&q=${city}&days=${day}&aqi=no&alerts=no`);

      if (res.status !== 200) {
        throw new Error("Error!");
      }

      if (res.status === 200) {
        setDaysData(res.data);
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    getWeekWeather(city, selectDay);
  }, [city, selectDay]);

  const handleSelectCity = (city) => {
    setCurrentData(city);
  };

  const handleSelectDay = (day) => {
    setSelectDay(day);
  };

  const values = {
    currentData,
    setCurrentData,
    loading,
    setLoading,
    error,
    setError,
    daysData,
    setDaysData,
    tenDayData,
    setTenDayData,
    theme,
    setTheme,
    city,
    setCity,
    selectDay,
    setSelectDay,
    handleSelectCity,
    handleSelectDay,
    toggleChange,
  };

  return (
    <AppContext.Provider value={values}>
      <section className={theme ? "section dark-theme" : "light-theme"}>
        <div className="container">
          <Header />
          <div className="thisday">{currentData && <Current />}</div>
          {daysData && <DaysInfo />}
        </div>
      </section>
    </AppContext.Provider>
  );
};

export default App;
