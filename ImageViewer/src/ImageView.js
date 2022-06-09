import logo from './logo.svg';
import './App.css';
import React, { useRef, useState, useCallback } from 'react'
import ImageViewer from 'react-simple-image-viewer';

const ImageView = (() =>{
  
        const [currentImage, setCurrentImage] = useState(0);
        const [isViewerOpen, setIsViewerOpen] = useState(false);
        const images = [logo];

        const openImageViewer = useCallback((index) => {
            setCurrentImage(index);
            setIsViewerOpen(true);
        }, []);

        const closeImageViewer = () => {
            setCurrentImage(0);
            setIsViewerOpen(false);
        };

        return (

            <div>
      {images.map((src, index) => (
        <img
          src={ src }
          onClick={ () => openImageViewer(index) }
          width="300"
          key={ index }
          style={{ margin: '2px' }}
          alt=""
        />
      ))}

      {isViewerOpen && (
        <ImageViewer
          src={ images }
          currentIndex={ currentImage }
          disableScroll={ false }
          closeOnClickOutside={ true }
          onClose={ closeImageViewer }
        />
      )}
    </div>
        );
});
export default ImageView;