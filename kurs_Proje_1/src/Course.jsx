import React from "react";
import "./css/Course.css";
export default function Course({ course }) {
  const { id, title, description, price, link, img } = course;
  return (
    <div className="course">
      <img src={img} width={220} height={110} />
      <h4 className="course-title">{title}</h4>
      <p className="course-desc">{description}</p>
      <h3 className="course-price">{price} ₺</h3>
      <div className="course-link">
        <a style={{ textDecoration: "none" }} href={link}>
          satın almak için
        </a>
      </div>
    </div>
  );
}
