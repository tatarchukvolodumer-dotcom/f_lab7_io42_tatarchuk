import React, { useState } from 'react';

function Image() {
  const [images, setImages] = useState([
    { id: 1, width: 600, isMain: true },
  ]);

  const handleAdd = () => {
    setImages((prev) => [
      ...prev,
      { id: Date.now(), width: 300, isMain: false },
    ]);
  };

  const handleGrow = () => {
    if (images.length === 0) return;
    setImages((prev) =>
      prev.map((img, idx) =>
        idx === prev.length - 1
          ? { ...img, width: Math.round(img.width * 1.1) }
          : img
      )
    );
  };

  const handleShrink = () => {
    if (images.length === 0) return;
    setImages((prev) =>
      prev.map((img, idx) =>
        idx === prev.length - 1
          ? { ...img, width: Math.round(img.width * 0.9) }
          : img
      )
    );
  };

  const handleDelete = () => {
    if (images.length === 0) return;
    setImages((prev) => prev.slice(0, -1));
  };

  return (
    <section>
      <div id="block-11">
        {images.map((img) =>
          img.isMain ? (
            <a
              key={img.id}
              href="https://en.uesp.net/wiki/Skyrim:Whiterun"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={`${process.env.PUBLIC_URL}/Whiterun.jpg`}
                alt="Вайтран"
                width={img.width}
              />
            </a>
          ) : (
            <img
              key={img.id}
              src={`${process.env.PUBLIC_URL}/Whiterun.jpg`}
              alt="Вайтран"
              width={img.width}
            />
          )
        )}
      </div>

      <div className="controls">
        <button onClick={handleAdd}>Додати</button>
        <button onClick={handleGrow}>Збільшити</button>
        <button onClick={handleShrink}>Зменшити</button>
        <button onClick={handleDelete}>Видалити</button>
      </div>
    </section>
  );
}

export default Image;