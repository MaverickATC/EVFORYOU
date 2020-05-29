import React, { useState, useCallback } from "react";
import { Container } from "react-bootstrap";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";


//import images
import i1 from "../assets/testdrive1.png";
import i2 from "../assets/testdrive2.png";
import i3 from "../assets/testdrive3.png";
import i4 from "../assets/testdrive4.png";
import i5 from "../assets/testdrive5.png";
import i6 from "../assets/testdrive6.png";
import { useHttp } from "../hooks/http.hook";
import { Loader } from "./Loader";

export default function CatItemGallery({photos}) {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const { loading } = useHttp();

  let imgs = [];
  for (let i = 0; i < photos.length; i++) {
    const im = {index: 0, src: photos[i], className: "img-fluid width-5 m-2"};
    imgs.push(im);
    
  }

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <Gallery photos={imgs} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={imgs.map((x) => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
}
