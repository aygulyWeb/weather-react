import React from "react";
import { AppContext } from "../store/AppContext";

export const useAppContext = () => {
  return React.useContext(AppContext);
};
