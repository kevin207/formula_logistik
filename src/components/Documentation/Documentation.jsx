import React from "react";
import "./documentation.css";
import Carousel from "react-bootstrap/Carousel";
import { Fade } from "react-awesome-reveal";

//Image
import IMG1 from "../../assets/Activity/1.jpg";
import IMG2 from "../../assets/Activity/2.jpg";
import IMG3 from "../../assets/Activity/3.jpg";
import IMG4 from "../../assets/Activity/4.jpg";
import IMG5 from "../../assets/Activity/5.jpg";
import IMG6 from "../../assets/Activity/6.jpg";

//Video
import VID1 from "../../assets/Activity/1.mp4";
import VID2 from "../../assets/Activity/2.mp4";
import VID3 from "../../assets/Activity/3.mp4";

const Documentation = () => {
  return (
    <section className="documentation" id="documentation">
      <div className="doc_wrapper">
        <div className="doc_title">DOKUMENTASI</div>

        <div className="doc_bottom">
          <Carousel controls={false}>
            <Carousel.Item interval={3000}>
              <Fade triggerOnce>
                <div className="doc_media">
                  <img src={IMG1} alt="Formula Logistik Dokumentasi" className="media_img" />
                  <img src={IMG2} alt="Formula Logistik Dokumentasi" className="media_img" />
                  <img src={IMG3} alt="Formula Logistik Dokumentasi" className="media_img" />
                  <img src={IMG4} alt="Formula Logistik Dokumentasi" className="media_img" />
                  <img src={IMG5} alt="Formula Logistik Dokumentasi" className="media_img" />
                  <img src={IMG6} alt="Formula Logistik Dokumentasi" className="media_img" />
                </div>
              </Fade>
            </Carousel.Item>

            <Carousel.Item interval={10000}>
              <Fade triggerOnce>
                <div className="doc_video">
                  <video muted autoPlay="autoplay" loop="loop" className="media_vid">
                    <source src={VID1} type="video/mp4" />
                  </video>

                  <video muted autoPlay="autoplay" loop="loop" className="media_vid">
                    <source src={VID2} type="video/mp4" />
                  </video>

                  <video muted autoPlay="autoplay" loop="loop" className="media_vid">
                    <source src={VID3} type="video/mp4" />
                  </video>
                </div>
              </Fade>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Documentation;
