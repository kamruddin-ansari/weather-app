import React, { useEffect, useState } from "react";
import '../style/style.css'
const Weather = () => {
    const [data, setData] = useState({});
    const [city, setCity] = useState("delhi");
  
    useEffect(() => {
      fetchApi();
    }, [city]);
  const fetchApi = async () => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e03a6a3443b662e0b6e4f087227dff04`;
        const response = await fetch(url);
        const weatherData = await response.json();
        setData(weatherData);
       
      };
      console.log(data);
    return (
      <>
        <div className="box">
          <div className="inputData">
            <input
              value={city}
              className="inputfeild"
              onChange={(event) => {
                setCity(event.target.value);
              }}
            />
          </div>
          {data.cod==200 ? (
            <div>
            <h2>{data.name}</h2>
            <h1>{data.main && data.main.temp} Cel</h1>
            <h3>
              Min: {data.main && data.main.temp_min} Cel | Max: {data.main && data.main.temp_max} Cel
            </h3>
          </div>

          ) : (
            <p>No city found</p>
          ) }
         
        </div>
      </>
    );
  };
  
  export default Weather;