import React, { useEffect, useState } from "react";

import "./Publicidad.css";

const Publicidad = ({ publicidad, countList }) => {
  const [isVisible, setIsVisible] = useState(0);

  useEffect(() => {
    console.log("Iniciando Publicidad");
  }, [publicidad, countList]);

  useEffect(() => {
    const controlTime = setInterval(() => {
      const verifi = () => {
        let countNow = isVisible === countList ? 1 : isVisible + 1;
        setIsVisible((isVisible) => countNow);
      };
      verifi();
    }, 10000);
    return () => clearInterval(controlTime);
  }, [isVisible]);

  if (isVisible === 0)
    return (
      <div className = "container-publicidad">
        <img
          className="posts-images"
          src={`https://candelaradio979.com/img/disponible.jpg`}
          alt="disponible.jpg"
        />
      </div>
    );
  else {
    const url = isVisible > 0
        ? publicidad.filter((i) => parseInt(i.id) === isVisible)
        : [];
       
    return (
      <div className = "container-publicidad">
        <img
          key={url[0].id}
          className="posts-images"
          src={`https://candelaradio979.com/img/${url[0].url}`}
          alt={url[0].url}
        />
      </div>
    );
  }
};

export default Publicidad;
