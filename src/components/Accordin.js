import React from "react";

export default function Accordin({ title, para }) {
  const handleClick = (e) => {
    e.target.nextSibling.classList.toggle("open");
    e.target.children[0].classList.toggle("fa-xmark");
  };
  const handlePlus = (e) => {
    e.target.parentElement.click();
  };
  return (
    <div className="accordin">
      <button className="accordin-item" onClick={handleClick}>
        {title}
        <i className="fa-solid fa-plus" onClick={handlePlus}></i>
      </button>
      <div className="accordin-text closed">
        <div className="accodin-paragraph">{para}</div>
      </div>
    </div>
  );
}
