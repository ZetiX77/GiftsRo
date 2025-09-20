import React from 'react';
import './ProductBlock.css';
import kepka from "../../assets/kepka.png"
import shlem from "../../assets/shlem.png"
import pepe from "../../assets/logo1.png"

const ProductBlock = () => {
  return (
    <div className="product-block-container">
      <div className="content-wrapper">
        <h1 className="product-title">NFT в GiftsRo</h1>
        
        <div className="product-visuals">
          <div className="visual-item oval-left">
            <img 
              src={kepka}
              alt="" 
              className="visual-image" 
            />
          </div>
          
          <div className="visual-item oval-center">
            <img 
              src={shlem}
              alt="" 
              className="visual-image" 
            />
          </div>
          
          <div className="visual-item oval-right">
            <img 
              src={pepe}
              alt="" 
              className="visual-image" 
            />
          </div>
        </div>
        
        <p className="product-price">Link : @GiftsRo</p>

        <div className="info-section">
          <h2 className="info-title">информация о NFT и розыгрыш</h2>
          <p className="info-description">
            На канале можно найти всю нужную информацио о телеграм подарках,
            А так же на канал несколько раз в день публикуется розыгрышы на телеграм подарки
          </p>
          <div className="action-buttons">
            <button className="view-more-btn">View more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductBlock;