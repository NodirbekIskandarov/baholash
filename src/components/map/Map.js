import React from "react";
import { FaLocationDot } from 'react-icons/fa6'
import { BsTelephoneFill } from 'react-icons/bs'
function Map() {
  return (
    <div>
      <div className="container">
        <div className="map_part">
            <div className="info">
                <h1>Ждем вас по адресу:</h1>
                <b><FaLocationDot/> г. Москва, Электрический переулок 3/10с3</b>
                <p>График работы: понедельник – пятница с 9:00 до 19:00</p>
                <b><BsTelephoneFill/> +998999999999</b>
                <p>Остались вопросы?</p>
                <button>Остались вопросы?</button>
            </div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6167.748557078694!2d69.24952972623407!3d41.3165582861041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b685b689e13%3A0xaf4cdf526e02f5e7!2z0KXQuNC70YLQvtC9LCDQotCw0YjQutC10L3RgiDQodC40YLQuA!5e0!3m2!1sru!2s!4v1690999544738!5m2!1sru!2s" width="800" height="400" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  );
}

export default Map;
