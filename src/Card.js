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
            <p>{message.message.amazon.desc}</p>
            <p className='rating_para'>Rating: {message.message.amazon.rating}</p>
            <p>Price: ₹{message.message.amazon.price}</p>
            <a href={message.message.amazon.link}><img class="amazon-logo" src='https://i.pinimg.com/736x/75/19/72/75197219cb0da0c45ebdb03ff17dddd8.jpg' alt='amazon logo'/></a>

          </div>
        )}
        {hasFlipkart && (
          <div className='flipkart_response_card'>
            <img className='response_images' src={message.message.flipkart.image} alt="product requested by the user"/>
            <p>{message.message.flipkart.desc}</p>
            <p className='rating_para'>Rating: {message.message.flipkart.rating}</p>
            <p>Price: {message.message.flipkart.price}</p>
            <a href={message.message.flipkart.link}><img class="flipkart-logo"src='https://vikasplus.com/wp-content/uploads/2016/09/Flipkart-Logo.png' alt='flipkart logo'/></a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
