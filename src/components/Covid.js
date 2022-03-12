import { useEffect, useState } from "react";
import axios from "axios";
import XMLParser from "react-xml-parser";

import "../css/covid.css";
const Key = process.env.REACT_APP_COVID_API_KEY;
function Covid() {
  const [covidInfo, setCovidInfo] = useState();
  // const getCovidInfo = async () => {
  //   const response = await axios
  //     .get(
  //       `http://apis.data.go.kr/B552584/UlfptcaAlarmInqireSvc/getUlfptcaAlarmInfo?year=2022?returnType=json&serviceKey=${Key}`
  //     )
  //     .then((res) => console.log(res));
  //   setCovidInfo(response);
  // };
  // useEffect(() => {
  //   getCovidInfo();
  // }, []);
  return (
    <div className="weather-covid">
      <section className="covid-wrapper">
        <h4>코로나확진자</h4>
      </section>
    </div>
  );
}

export default Covid;
