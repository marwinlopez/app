import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import logo from "./components/img/candela.png";
import promo from "./components/img/promo.png";
import "./App.css";
import Header from "./components/Header";
import Repro from "./components/Repro";
import Publicidad from "./components/Publicidad";
import Moment from "moment";
import { extendMoment } from "moment-range";
var timezone = require("moment-timezone");

const moment = extendMoment(Moment);

const App = ({ config }) => {
  const [urlActive, setUrlActive] = useState();
  const [emisoraOnline, setEmisoraOnline] = useState();
  const [productsList, setProductsList] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [countList, setCountList] = useState(0);

  useEffect(() => {
    setProductsList([...config.publicidad]);
    setCountList(config.publicidad.length - 1);
    setisLoading(true);
  }, [setProductsList, setCountList, setisLoading]);


  useEffect(() => {
    const controlTime = setInterval(() => {
      const verifi = () => {
        const now = timezone.tz("America/Caracas");
        var dow = now.isoWeekday();
       console.log(dow === 7)
        config.timetable.map((item) => {
          let weekday = item.weekday.filter((w) => w === dow);
          if (weekday.length > 0) {
            let timerStart = timezone.tz(item.start_time, "America/Caracas");
            let timerEnd = timezone.tz(item.end_time, "America/Caracas");
            var start = moment.duration(
                timezone
                  .tz(item.start_time, "America/Caracas")
                  .format("HH:mm:ss"),
                "HH:mm:ss"
              ),
              end = moment.duration(now.format("HH:mm:ss"), "HH:mm:ss"),
              diff = start.subtract(end);

            if (
              now.format("HH:mm:ss") >= timerStart.format("HH:mm:ss") &&
              now.format("HH:mm:ss") <= timerEnd.format("HH:mm:ss")
            ) {
              if (typeof urlActive === "undefined") {
                setUrlActive("https://sonic01.instainternet.com/8290/stream");
              } else if (
                urlActive !== "https://sonic01.instainternet.com/8290/stream"
              ) {
                setUrlActive("https://sonic01.instainternet.com/8290/stream");
              }
              setEmisoraOnline(
                "Candela 979 La Radio Mix de Venezuela EL HotParty desde Rumbera"
              );
            } else {
              if (typeof urlActive === "undefined") {
                setUrlActive("https://laradiossl.online:10393/stream?type=.mp3;");
              } else if (
                urlActive !== "https://laradiossl.online:10393/stream?type=.mp3;"
              ) {
                setUrlActive("https://laradiossl.online:10393/stream?type=.mp3;");
              }
              setEmisoraOnline("Candela 979");
            }
          }else if(dow === 7){
            setUrlActive(urlActive=>"https://laradiossl.online:10393/stream?type=.mp3;");
            setEmisoraOnline(emisoraOnline=>"Candela 979");
          }
        });
      };
      verifi();
    }, 1000);
    return () => clearInterval(controlTime);
  }, []);
  if (isLoading && countList > 0)
    return (
      <div className="contenedor">
        <Header logoUrl={logo} />
        <Publicidad publicidad={productsList} countList={countList} />
        <img className="promo" src={promo} />
        <Repro audio = {new Audio(urlActive)} emisoraOnline={emisoraOnline} />
      </div>
    );
  else
    return (
      <div>
        <h1>Cargando datos.........</h1>
      </div>
    );
};

export default App;
