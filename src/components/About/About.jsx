import React from "react";
import "./about.css";
import IMG from "../../assets/about.jpg";
import { Fade, Rotate } from "react-awesome-reveal";

const About = () => {
  return (
    <section className="about" id="about">
      <Fade direction="down" triggerOnce delay={200}>
        <div className="small_about">Kenali Lebih Dalam</div>
      </Fade>

      <Fade delay={800} direction="up" triggerOnce>
        <h1 className="about_title">Tentang Kami</h1>
      </Fade>

      <div className="about_wrap">
        <div className="about_left">
          <Rotate direction="bottom-left" delay={1200} triggerOnce>
            <img src={IMG} className="about_image" alt="Formula Logistik Company" />
          </Rotate>
        </div>
        <div className="about_right">
          <Fade direction="right" delay={1200} triggerOnce>
            <div className="desc_title">Formula Logistik</div>
            <div className="desc">
              Jasa Ekspedisi dan Cargo yang melayani pengiriman barang dari Jakarta ke seluruh kota di Indonesia melalui Jalur Darat, Laut dan Udara. Jaringan logistik yang luas dan memadai menjadikan pengiriman barang lebih cepat sampai
              sesuai lead time, barang aman dan tarif pengiriman yang lebih terjangkau. Kami menerima pengiriman barang dalam jumlah besar maupun kecil atau project cargo.
            </div>
            <div className="desc">
              Konsultasikan rencana pengiriman anda dengan <strong>Tim Marketing Formula Logistik</strong>. Kami memberikan harga terbaik dengan win-win solution.
            </div>

            <button className="about_btn" onClick={() => window.open("http://wa.me/6281218199758", "_blank")}>
              Konsultasi
            </button>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default About;
