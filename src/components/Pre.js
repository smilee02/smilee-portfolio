import React, { useState, useEffect } from "react";

import { useGLTF } from "@react-three/drei";
import laptopImg from "../Assets/profile_image.jpg";
import contactImg from "../Assets/contact.png";

function Pre(props) {
  const [contentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {
    const IMAGES = [laptopImg, contactImg];
    const loadImage = (image) => {
      return new Promise((resolve, reject) => {
        const loadImg = new Image();
        loadImg.src = image;
        loadImg.onload = () =>
          setTimeout(() => {
            resolve(image);
          }, 10);

        loadImg.onerror = (err) => reject(err);
      });
    };

    useGLTF.preload("/Contact.glb");

    Promise.all(IMAGES.map((image) => loadImage(image)))
      .then(() => setContentLoaded(true))
      .catch((err) => console.log("Failed to load images", err));
  }, []); // Removed IMAGES from the dependency array

  return (
    <div
      id={props.load && !contentLoaded ? "preloader" : "preloader-none"}
    ></div>
  );
}

export default Pre;
