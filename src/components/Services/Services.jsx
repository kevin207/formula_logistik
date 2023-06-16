import React from "react";
import "./services.css";

import { FaTruck, FaMotorcycle, FaCar } from "react-icons/fa";
import { GiCargoCrane, GiCargoShip, GiCargoCrate } from "react-icons/gi";
import { Fade } from "react-awesome-reveal";

const Services = () => {
  return (
    <section className="services" id="services">
      <Fade direction="down" triggerOnce delay={200}>
        <div className="small_services">Yang Kami Sediakan</div>
      </Fade>

      <Fade delay={1000} direction="up" triggerOnce>
        <h1 className="services_title">Layanan Kami</h1>
      </Fade>

      <div className="service_wrap">
        <Fade cascade triggerOnce direction="top-left" delay={1500}>
          <div className="service">
            <FaTruck className="service_icon" />
            <div className="service_title">Cargo Darat</div>
            <small className="service_desc">Layanan Pengiriman Barang melalui jalur darat dengan tarif kompetitif (murah), lead times sesuai jadwal & jaminan keamanan sampai ke tujuan.</small>
          </div>
        </Fade>

        <Fade cascade triggerOnce direction="down" delay={1500}>
          <div className="service">
            <GiCargoCrate className="service_icon" />
            <div className="service_title">Logistik Proyek</div>
            <small className="service_desc">Melayani logistik proyek sekala kecil & besar, baik rutin maupun insidental. tarif bisa disesuaikan dengan tim kami (win-win solution).</small>
          </div>
        </Fade>

        <Fade cascade triggerOnce direction="top-right" delay={1500}>
          <div className="service">
            <GiCargoShip className="service_icon" />
            <div className="service_title">Cargo Laut</div>
            <small className="service_desc">Layanan Pengiriman Barang melalui jalur Laut menggunakan kapal pelni / cargo. tarif kompetitif (murah), lead times sesuai jadwal & jaminan keamanan.</small>
          </div>
        </Fade>

        <Fade cascade triggerOnce direction="bottom-left" delay={1500}>
          <div className="service">
            <FaCar className="service_icon" />
            <div className="service_title">Pengiriman Mobil</div>
            <small className="service_desc">Layanan Pengiriman Mobil ke Seluruh Wilayah di Indonesia dengan tarif terjangkau, aman dan bergaransi.</small>
          </div>
        </Fade>

        <Fade cascade triggerOnce direction="up" delay={1500}>
          <div className="service">
            <GiCargoCrane className="service_icon" />
            <div className="service_title">Pengiriman Alat Berat</div>
            <small className="service_desc">Layanan Pengiriman Alat Berat ke Seluruh Wilayah di Indonesia dengan tarif terjangkau, aman dan bergaransi.</small>
          </div>
        </Fade>

        <Fade cascade triggerOnce direction="bottom-right" delay={1500}>
          <div className="service">
            <FaMotorcycle className="service_icon" />
            <div className="service_title">Pengiriman Sepeda Motor</div>
            <small className="service_desc">Layanan Pengiriman Sepeda Motor ke Seluruh Wilayah di Indonesia dengan tarif terjangkau, aman dan bergaransi.</small>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Services;
