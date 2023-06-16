import React from "react";
import "./pros.css";

import { RiMoneyDollarCircleFill, RiCustomerService2Fill } from "react-icons/ri";
import { FaShippingFast } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";

const Pros = () => {
  return (
    <section className="pros" id="pros">
      <Fade direction="down" triggerOnce delay={200}>
        <div className="small_pros">Kenapa Memilih Formula Logistik</div>
      </Fade>

      <Fade delay={1000} direction="up" triggerOnce>
        <h1 className="pros_title">Kelebihan Layanan Kami</h1>
      </Fade>

      <div className="pros_wrap">
        <Fade cascade triggerOnce direction="right" delay={1500}>
          <div className="pro">
            <FaShippingFast className="pro_icon" />
            <div className="pro_title">Mudah, Cepat & Aman</div>
            <small className="pro_desc">Kirim barang lebih mudah, cukup hubungi kami. Barang bisa dipickup (S&K). Pengiriman Cepat & Aman.</small>
          </div>

          <div className="pro">
            <RiMoneyDollarCircleFill className="pro_icon" />
            <div className="pro_title">Tarif Terjangkau</div>
            <small className="pro_desc">Ongkos kirim terjangkau dan kompetitif serta bisa disesuaikan sesuai dengan jumlah muatan.</small>
          </div>

          <div className="pro">
            <RiCustomerService2Fill className="pro_icon" />
            <div className="pro_title">Layanan Bersahabat</div>
            <small className="pro_desc">Sahabat dalam pengiriman Anda, memberikan info saat pengiriman, hingga barang sampai di tujuan.</small>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Pros;
