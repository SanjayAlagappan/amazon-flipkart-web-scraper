import React from 'react';

const Card = ({ index, message }) => {
  const hasMessage = message && message.message;
  const hasAmazon = hasMessage && message.message.amazon;
  const hasFlipkart = hasMessage && message.message.flipkart;
  
  return (

  <div className="card">
      <div className="card-header">
      </div>
      <div className="card-body">
        {hasAmazon && (
          <div className="amazon_response_card">
            <img className='response_images' src={message.message.amazon.image} alt="product requested by the user"/>
            <p>Site: {message.message.amazon.site}</p>
            <p>Rating: {message.message.amazon.rating}</p>
            <p>Price: {message.message.amazon.price}</p>
            <a href={message.message.amazon.link}>Amazon Buy Link</a>
          </div>
        )}
        {hasFlipkart && (
          <div className='flipkart_response_card'>
            <img className='response_images' src={message.message.flipkart.image} alt="product requested by the user"/>
            <p>{message.message.flipkart.desc}</p>
            <p>Site: {message.message.flipkart.site}</p>
            <p>Rating: {message.message.flipkart.rating}</p>
            <p>Price: {message.message.flipkart.price}</p>
            <a href={message.message.flipkart.link}>Flipkart Buy Link</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
