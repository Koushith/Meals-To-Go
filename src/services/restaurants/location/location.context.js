import { createContext, useEffect, useState } from "react";
import { locatinTransform, locationRequest } from "./location.service";

export const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
  const [keyword, setKeyword] = useState("san fransisco");
  const [location, setLocation] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSearch = (searchKeyword = "Antwerp") => {
    console.log(searchKeyword);

    setIsLoading(true);

    setKeyword(searchKeyword);

    locationRequest(keyword.toLocaleLowerCase())
      .then(locatinTransform)
      .then((result) => {
        setIsLoading(false);
        setLocation(result);
        console.log("result", result);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  };

  useEffect(() => {
    onSearch();
  }, []);

  return (
    <LocationContext.Provider
      value={{
        isLoading,
        error,
        location,
        keyword,
        search: onSearch,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
