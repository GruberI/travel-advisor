import React, { useEffect, useState } from "react";
import CssBaseline from "@mui/material//CssBaseline";
import Grid from "@mui/material/Grid";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import { getPlacesData } from "./api";

const App = () => {
  const [places, setPlaces] = useState([]);
  const [coords, setCoords] = useState({});
  //top bottom of map Coords for parameters
  const [bounds, setBounds] = useState({});
  const [childClicked, setChildClicked] = useState(null);
  const [isLoading, setIsLoading] = useState(false)

  //use effect at start to get current lat and lng
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude}}) => {
        setCoords({ lat: latitude, lng: longitude})
    })
  }, [])

  ///Fetching api data
  useEffect(() => {
    setIsLoading(true)
    getPlacesData(bounds?.sw, bounds?.ne).then((data) => {
      setPlaces(data);
      setIsLoading(false)
    });
  }, [bounds]);

  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List places={places} childClicked={childClicked} isLoading={isLoading}/>
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            setCoords={setCoords}
            setBounds={setBounds}
            coords={coords}
            places={places}
            setChildClicked={setChildClicked}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
