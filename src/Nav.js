import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="nav_logo"
        src="https://assets.brand.microsites.netflix.io/assets/1ed15bca-b389-11e7-9274-06c476b5c346_cm_800w.png?v=6"
        alt="logo"
      />
      <img
        className="nav_avatar"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRxFFI01LRKeDdPLt-KrFZLLfong8FegBFP0w&usqp=CAU"
        alt="netflix_logo"
      />
    </div>
  );
}

export default Nav;
