import React, { useState, useEffect, useRef } from "react";
import "./Repro.css";
import { FaPlayCircle, FaInstagram, FaPauseCircle } from "react-icons/fa";
import useAudio from "../Audio/Audio";

const color = [
  "#000000",
  "#007bff",
  "#6610f2",
  "#6f42c1",
  "#e83e8c",
  "#fd7e14",
  "#28a745",
  "#20c997",
  "#17a2b8",
  "#fff",
  "#dc3545",
  "343a40",
  "#ffc107",
  "#dc3545"
];




const Repro = ({ audio, emisoraOnline }) => {
  const [isPlay, setIsPlay] = useState(false);
  const [colorBtn, setColorBtn] = useState(5);
  const [playing, toggle] = useAudio(audio);
  
  function handleClick() {
    toggle();
    setIsPlay(!isPlay);
  };

  
  useEffect(() => {
    setTimeout(()=>{
      if (!isPlay) toggle();
    },6000)
  }, [])

  
  useEffect(() => {
    const controlTime = setInterval(() => {
      const verifi = () => {
        getColorBtn();
      };
      verifi();
    }, 1000);
    return () => clearInterval(controlTime);
  }, [setIsPlay]);

  const getColorBtn = ()=>{
    var num = Math.round(Math.random() * (color.length - 1) + 1);
    setColorBtn(num);
  }

  if (typeof emisoraOnline !== "undefined") {
    return (
      <div
        style={{
          position: "fixed",
          bottom: "0",
          display: "flex",
          width: "100%",
          color: "#FFFFFF",
          background: "#252424",
        }}
      >
        <button
          className="btn btn-candela"
          onClick={handleClick}
        >
          {!playing ? (
            <FaPlayCircle style={{ fontSize: "5rem", color: color[colorBtn] }} />
          ) : (
            <FaPauseCircle style={{ fontSize: "5rem", color: color[colorBtn] }} />
          )}
        </button>
        <footer className="footer">
          <article>
            <h2>By DJ Numa </h2>
          </article>
          <article>
            <div className="footer-social-media">
              <FaInstagram className="icon-social-media" />
              <div className="link-social-media">
                <a
                  href="https://www.instagram.com/candelaradio979/"
                  className="App-link-social-media"
                  target="_blank"
                >
                  <strong>@candelaradio979</strong>{" "}
                </a>
                <a
                  href="https://www.instagram.com/djnumaoficial/"
                  className="App-link-social-media"
                  target="_blank"
                >
                  <strong>@djnumaoficial</strong>{" "}
                </a>
              </div>
            </div>
          </article>
        </footer>
      </div>
    );
  } else {
    return <h1>Candela </h1>;
  }
};

export default Repro;
