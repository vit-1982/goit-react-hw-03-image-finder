import React from "react";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import styles from "./ImageGallery.module.css";

function ImageGallery({ imageList, setLargeImage }) {
  return (
    <ul className={styles.ImageGallery}>
      {imageList.map((imageListItem) => (
        <ImageGalleryItem
          setImage={setLargeImage}
          key={imageListItem.largeImageURL}
          item={imageListItem}
          setLargeImage={setLargeImage}
        />
      ))}
    </ul>
  );
}

export default ImageGallery;
