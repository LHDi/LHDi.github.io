import React from "react";
// @ts-ignore
import MyIMG from "../images/MyIMG.jpg";
// @ts-ignore
import style from '../css/image.module.css';

const MyImage = () => {


  return (
    <div style={{ width: '300px', height: '300px' }} className={style.border}>
      <img src={MyIMG} alt='Mahammed E. Baci' />
    </div>
  );
};

export default MyImage;
