import React from 'react';

import './card.css';

function Card({ info, onPlusAge, onMinusAge, onReset }) {
  const { image, name, role, birthday, mark, edu, address, email, phone, age } = info;
  return (
    <div className="card d-flex">
      <img className="picture" src={image} alt="demo pic" />

      <div className="intro d-flex flex-column align-items-center">
        <h4 className="display-one-line">{name}</h4>

        <p className="display-one-line">{role}</p>

        <p className="display-one-line mt-3">{age}</p>

        <button onClick={onPlusAge} className="btn btn-primary mt-3 w-auto">Già thêm 1 tuổi</button>

        <button onClick={onMinusAge} className="btn btn-secondary mt-3 w-auto">Trẻ đi 1 tuổi</button>

        <button onClick={onReset} className="btn btn-danger mt-3 w-auto">Hồi sinh</button>
      </div>

      <div className="info-warpper">
        <div className="info">
          <div className="icon d-flex">
            <i className="fa-regular fa-calendar-days" />

            <span>DOB</span>
          </div>

          <div className="info-content">{birthday}</div>
        </div>

        <div className="info">
          <div className="icon d-flex">
            <i className="fa-solid fa-heart" />

            <span>BG</span>
          </div>

          <div className="info-content">{mark}</div>
        </div>

        <div className="info">
          <div className="icon d-flex">
            <i className="fa-regular fa-calendar-days" />

            <span>EDU</span>
          </div>
          <div className="info-content">{edu}</div>
        </div>

        <div className="info">
          <div className="icon d-flex">
            <i className="fa-regular fa-calendar-days" />

            <span>RES</span>
          </div>

          <div className="info-content">{address}</div>
        </div>
      </div>

      <div className="contact-warpper">
        <div className="contact bg-red">
          <h5>EMAIL ID</h5>
          <div className="icon">
            <i
              className="fa-regular fa-envelope"
              style={{ color: '#fafcff' }}
            />

            <span>{email}</span>
          </div>
        </div>

        <div className="contact bg-green">
          <h5>PHONE NO</h5>
          <div className="icon">
            <i className="fa-solid fa-phone" style={{ color: '#fafcff' }} />

            <span>{phone}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
