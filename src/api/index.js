import axios from "axios";

const URL =
  "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

//USING OBJECT AS SECOND PARAMETERE FOR API CALL INSTEAD OF STATIC DATA
// const options = {
//   method: "GET",
//   url: "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary",
//   params: {
//     bl_latitude: "11.847676",
//     tr_latitude: "12.838442",
//     bl_longitude: "109.095887",
//     tr_longitude: "109.149359",
//   },
//   headers: {
//     "X-RapidAPI-Key": "4b9735bdcamsh7cf7f7275db9c98p11a444jsn4c2143473703",
//     "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
//   },
// };

export const getPlacesData = async (sw, ne) => {
  try {
    const { data: { data } } = await axios.get(URL, {
      method: "GET",
      url: "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary",
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        "X-RapidAPI-Key": "4b9735bdcamsh7cf7f7275db9c98p11a444jsn4c2143473703",
        "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
