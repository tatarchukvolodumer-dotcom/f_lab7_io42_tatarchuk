import React from 'react';

function GoodsCard({ image, title, price }) {
  return (
    <div className="goods-card">
      <img src={image} alt={title} className="goods-image" />
      <h4 className="goods-title">{title}</h4>
      <p className="goods-price">Ціна: {price}</p>
    </div>
  );
}

export default GoodsCard;