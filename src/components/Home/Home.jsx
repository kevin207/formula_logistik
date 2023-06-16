import React from "react";
import "./home.css";
import { BsGearFill } from "react-icons/bs";
import { Fade, Rotate } from "react-awesome-reveal";
import IMG1 from "../../assets/brand.png";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home_wrap">
        <div className="gear_wrap">
          <div className="gear_left">
            <Fade direction="left" triggerOnce>
              <BsGearFill className="gear_big" />
            </Fade>
          </div>

          <div className="gear_right">
            <Fade direction="top-right" triggerOnce delay={600}>
              <BsGearFill className="gear_small" />
            </Fade>
            <Fade direction="bottom-right" triggerOnce delay={1100}>
              <BsGearFill className="gear_small" />
            </Fade>
          </div>
        </div>

        <Rotate direction="bottom-right" delay={200} triggerOnce>
          <div className="title_wrap">
            <div className="title_wrap_inner">
              <Fade direction="down" delay={1000} triggerOnce>
                <img src={IMG1} alt="brand formula logistik" className="home-logo" />
              </Fade>

              <Fade duration={2000} delay={1500} triggerOnce>
                <div className="sub_title">Your Product Safety Is Our Priority</div>
              </Fade>
              <hr className="line"></hr>
            </div>
          </div>
        </Rotate>
      </div>
    </section>
  );
};

export default Home;
