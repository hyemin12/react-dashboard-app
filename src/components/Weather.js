import { useEffect, useState } from "react";
import axios from "axios";
import "../css/weather.css";

const KEY2 = process.env.REACT_APP_WEATHER_API_KEY;

function Weather() {
  const [weathers, setWeathers] = useState();
  const handleSuccess = async (position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${KEY2}&units=metric`
    );
    setWeathers(response.data);
    console.log(response.data);
  };
  function handleError() {
    alert("위치를 찾을 수 없습니다.");
  }
  useEffect(() => {
    const { geolocation } = navigator;
    geolocation.getCurrentPosition(handleSuccess, handleError);
  }, []);
  return (
    <section className="weather-wrapper">
      {weathers && weathers ? (
        <>
          <h4>{weathers.name}</h4>
          <span className="temp">{weathers.main.temp}</span>
          <img
            src={`http://openweathermap.org/img/wn/${weathers.weather[0].icon}@2x.png`}
            alt={weathers.weather[0].main}
          />
        </>
      ) : null}
    </section>
  );
}

export default Weather;
