import React from "react";

function Pin({ pinSize, imgSrc, name, link }) {
  return (
    <div className={`pin ${pinSize}`}>
      <img src={imgSrc} alt="" className="mainPic" />

      <div className="content">
        <h3>{name}</h3>
        <div className="search">
          <a href={link}>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/pinterest-clone-c597e.appspot.com/o/icons8-forward-arrow-100.png?alt=media&token=0a97bb0f-58ff-4e59-a004-77cf215cec87"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Pin;
