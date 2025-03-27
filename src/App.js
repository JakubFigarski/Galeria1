import React, { useState } from 'react';
import './App.css';

function App() {
  const categories = ['bronie', 'samochody', 'zwierzeta'];
  const images = {
    bronie: ['bron1.jpg', 'bron2.jpg', 'bron3.jpg'],
    samochody: ['samochod1.jpg', 'samochod2.jpg', 'samochod3.jpg'],
    zwierzeta: ['zwierze1.jpg', 'zwierze2.jpg', 'zwierze3.jpg'],
  };

  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [zoomedImage, setZoomedImage] = useState(null);

  const changeCategory = (category) => setSelectedCategory(category);
  const toggleZoom = (image) => setZoomedImage(zoomedImage === image ? null : image);

  return (
    <div>
      <h1>Galeria</h1>
      <nav>
        {categories.map((category) => (
          <button key={category} onClick={() => changeCategory(category)}>
            {category}
          </button>
        ))}
      </nav>
      <div className="gallery">
        {images[selectedCategory].map((image, index) => (
          <img
            key={index}
            src={`/${image}`}
            alt=""
            style={{ width: zoomedImage === image ? '500px' : '100px', cursor: 'pointer' }}
            onClick={() => toggleZoom(image)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
