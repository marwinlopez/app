import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const config = {
  name: "Candela 979",
  slogan: "La Radio Mix de Venezuela",
  urlCandela: "http://51.255.123.116:10393/stream;",
  urlRumbera: "https://laradiossl.online:10166/;",
  logo: "https://candelaradio979.com/img/candela.jpeg",
  publicidad: [
    {
      id: "1",
      advertiser_id: "1",
      url: "rastromotors.jpg",
      status: "on",
      tenant_id: "1",
    },
    {
      id: "2",
      advertiser_id: "2",
      url: "hidroparts.jpg",
      status: "on",
      tenant_id: "1",
    },
    {
      id: "3",
      advertiser_id: "3",
      url: "guaremal.jpg",
      status: "on",
      tenant_id: "1",
    },
    {
      id: "4",
      advertiser_id: "4",
      url: "mcdonalds.jpg",
      status: "on",
      tenant_id: "1",
    },
    {
      id: "5",
      advertiser_id: "5",
      url: "fullday.jpg",
      status: "on",
      tenant_id: "1",
    },
    {
      id: "6",
      advertiser_id: "6",
      url: "curramba.jpg",
      status: "on",
      tenant_id: "1",
    },
    {
      id: "7",
      advertiser_id: "7",
      url: "deividmotors.jpg",
      status: "on",
      tenant_id: "1",
    },
    {
      id: "8",
      advertiser_id: "1",
      url: "disponible.jpg",
      status: "on",
      tenant_id: "1",
    },
  ],
  timetable: [
    {
      id: "1",
      name_programing: "El Hot Party",
      start_time: "2021-04-05 08:00:00",
      end_time: "2021-04-05 11:00:00",
      tenant_id: "0",
      weekday: [1, 2, 3, 4, 5],
    },
    {
      id: "2",
      name_programing: "Fin de Semana",
      start_time: "2021-04-10 13:00:00",
      end_time: "2021-04-05 17:00:00",
      tenant_id: "0",
      weekday: [6],
    },
  ],
};

ReactDOM.render(
  <React.StrictMode>
    <App config={config} />
  </React.StrictMode>,
  document.getElementById("root")
);
