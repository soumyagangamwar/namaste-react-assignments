//import React from "react";
import "./styles.css";
import image from "./assets/images/logo.jpg";

const CHeader = ()=>{
    return (
        <div className='navbar'>
        <div className='image__container'>
          <img src={image} />
        </div>
       
        <div className='search__bar'>
          <div className='search__icon__container'>
            <i className='fa-solid fa-magnifying-glass'></i>
          </div>
          <input type='text' placeholder='Search' />
        </div>
        <i className='fa-solid fa-user-secret'></i>
      </div>
    )
}

export default CHeader;