import React from 'react';
import ViewProductButton from './button';  // Corrected import with proper capitalization
import './productcard.css'; // CSS for styling

function ProductCard() {
    const productImage = 'https://cdn.pixabay.com/photo/2024/09/10/16/59/ai-generated-9037610_1280.png';
    const productName = 'Aesthetic Art Frame';
    const price = '$77,000';

    return (
        <div className='product-card'>
            <img src={productImage} alt='product-image' className='product-image'/>
            <div className='product-info'>
                <h2>{productName}</h2>
                <p><strong>{price}</strong></p>
            </div>
            <ViewProductButton /> {/* Corrected component usage */}
        </div>
    );
}

export default ProductCard;
