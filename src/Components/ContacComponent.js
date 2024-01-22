import React from "react";
import { Weather } from "./Weather";

export const ContacComponent = () => {
  return (
    <div>
      <Weather />
      <section id="contact" className="get-started">
        <div className="container">
          <div className="row text-center">
            <h1 className="display-3 fw-bold text-capitalize">Contact</h1>
            <p className="lh-lg">Contact me via Email or Social Links</p>
            <div className="container mt-5 mb-5">
              <span className="display-2--description lh-base">
                <a
                  href="mailto:alexandergrigoratos@hotmail.com"
                  style={{ textDecoration: "none" }}
                >
                  <i className="fa fa-envelope mr-3" />{" "}
                  alexandergrigoratos@hotmail.com
                </a>
              </span>{" "}
              <br />
              <span className="display-2--description lh-base">
                <a
                  href="https://www.linkedin.com/in/alexander-grigoratos"
                  style={{ textDecoration: "none" }}
                >
                  <i className="fab fa-linkedin mr-3 mt-2" /> Alexander
                  Grigoratos
                </a>
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
