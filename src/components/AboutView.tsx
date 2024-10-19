// src/components/AboutView.tsx

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel styles

const AboutView: React.FC = () => {
    // Array of image URLs (replace these with your actual image URLs)
    const images = [
        'https://via.placeholder.com/800x400?text=Image+1',
        'https://via.placeholder.com/800x400?text=Image+2',
        'https://via.placeholder.com/800x400?text=Image+3',
    ];

    return (
        <div>
            <h2>About Us</h2>
            <Carousel showThumbs={false} autoPlay infiniteLoop>
                {images.map((url, index) => (
                    <div key={index}>
                        <img src={url} alt={`Carousel image ${index + 1}`} />
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default AboutView;
