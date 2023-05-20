import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const images = [
  "https://i.ibb.co/c3KrLFj/joel-potter-5i0xrd-Os8-H0-unsplash.jpg",
  "https://i.ibb.co/p00YYqP/andrew-reshetov-Xz-Eql-PQs-Ld-I-unsplash.jpg",
  "https://i.ibb.co/9hVLhby/yusuf-onuk-zd-WMEny5b-YM-unsplash.jpg",
  "https://i.ibb.co/m9h5k1y/sarthak-chauhan-e9o-Q3uh-PKE-unsplash.jpg",
  "https://i.ibb.co/9HrqYRh/ivan-diaz-ea-Hp-Lnx-Z21w-unsplash.jpg",
  "https://i.ibb.co/s5LDfYd/gimmel-magaway-4-E0u7-Vsf-Gms-unsplash.jpg",
];

const Gallery = () => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
      <Masonry gutter="15px">
        {images.map((image, i) => (
          <img
            data-aos="flip-left"
            data-aos-duration="500"
            key={i}
            src={image}
            style={{ width: "100%", display: "block", borderRadius: "10px" }}
            alt=""
          />
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
};

export default Gallery;
