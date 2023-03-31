import React from "react";
import Social from "./Social";

const Home = () => {
  return (
    <>
      <div className="tokyo_tm_home">
        <div className="home_content">
          <div className="avatar">
            <div
              className="image avatar_img"
              style={{
                backgroundImage: "url(assets/img/slider/1.jpg)",
              }}
            ></div>
          </div>

          <div className="details">
            <h3 className="name">Качанов Роман</h3>
            <p className="job">
              Creative programmer based in Europe and happy to travel all over
              the world to see .
            </p>

            <Social />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
