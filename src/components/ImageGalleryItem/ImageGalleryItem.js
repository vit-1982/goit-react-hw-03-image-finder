import React from "react";
import styles from "./ImageGalleryItem.module.css";

function ImageGalleryItem({ item, setImage }) {
  const { webformatURL, tags, largeImageURL } = item;
  return (
    <li
      className={styles.ImageGalleryItem}
      onClick={(e) => setImage(largeImageURL)}
    >
      <img
        src={webformatURL}
        alt={tags}
        className={styles.ImageGalleryItemImage}
      />
    </li>
  );
}

export default ImageGalleryItem;
