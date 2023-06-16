import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import swal from "sweetalert";

import { BsGeoAlt } from "react-icons/bs";
import { BiMailSend } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import { MdWorkOutline } from "react-icons/md";
import { Fade } from "react-awesome-reveal";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_5qxym4w", "template_nz05ous", form.current, "gt3_bKQ_wvyn6r-Aa");
    e.target.reset();

    swal("Sukses!", "Pesan Berhasil Terkirim!", "success");
  };

  return (
    <section className="contact" id="contact">
      <div className="transparent">
        <Fade direction="down" triggerOnce delay={200}>
          <div className="small_contact">Hubungi</div>
        </Fade>

        <Fade delay={1000} direction="up" triggerOnce>
          <h1 className="contact_title">Kontak Kami</h1>
        </Fade>

        <div className="contact_wrap">
          <Fade delay={1500} direction="left" triggerOnce>
            <div className="left_contact">
              <div className="left_wrap">
                {/* Top */}
                <div className="big_wrap">
                  <BsGeoAlt className="big_icon" />
                  <div className="big_content">
                    <div className="top_title">FORMULA LOGISTIK</div>
                    <div className="top_address">Jl. I Gusti Ngurah Rai No.41, RW.6, Cipinang Muara, Kec. Pulo Gadung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13240</div>
                  </div>
                </div>

                {/* Middle */}
                <div className="big_wrap">
                  <MdWorkOutline className="big_icon" />
                  <div className="big_content">
                    <div className="top_title">JAM OPERASIONAL</div>
                    <div className="top_address">
                      <table>
                        <tr>
                          <td>Senin - Sabtu &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                          <td>( 9:00 - 17:00 )</td>
                        </tr>

                        <tr>
                          <td>Minggu </td>
                          <td>( Libur )</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>

                {/* Bottom */}
                <div className="social_wrap">
                  <div className="social">
                    <FaWhatsapp className="social_icon" />
                    <h6>081218199758</h6>
                    <a rel="noreferrer" href="http://wa.me/6281218199758" target="_blank">
                      Message Us
                    </a>
                  </div>

                  <div className="social">
                    <BiMailSend className="social_icon" />
                    <h6>info@formulalogistik.com</h6>
                    <a href="mailto:info@formulalogistik.com">Email Us</a>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
          <Fade direction="right" delay={1500} triggerOnce>
            <div className="right_contact">
              <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="nama" placeholder="Nama Lengkap" required autocomplete="off" />
                <input type="email" name="email" placeholder="Email" required autocomplete="off" />
                <input type="text" name="nomor" placeholder="Nomor Telepon" autocomplete="off" />
                <textarea name="pesan" rows="7" placeholder="Pesan" required></textarea>
                <button type="submit" className="msg_btn">
                  Kirim Pesan
                </button>
              </form>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Contact;
