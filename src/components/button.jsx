import React from 'react';

function ViewProductButton() {
    const handleClick = () => {
        console.log('View Product button clicked');
    };
    
    return (
        <button className='view-product-btn' onClick={handleClick}>View Product</button> 
    );
}

export default ViewProductButton;
