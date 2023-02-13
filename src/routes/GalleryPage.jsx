import React, { useEffect, useState } from "react";
import { Storage } from 'aws-amplify';


  

function GalleryPage() {

    const [images, setImages] = useState([]);

    useEffect(() => {
      const fetchImages = async () => {
        try {
          const imageList = await Storage.list('');
          console.log('images: ', imageList.results);
          const imageUrls = await Promise.all(
            imageList.results.map(async (image) => {
                const imageUrl = await Storage.get(image.key);
                return { ...image, url: imageUrl };
            })
          );
          setImages(imageUrls);
          console.log(images);
        } 
        catch (error) {
          console.error(error)
        }
      };
      fetchImages();
    });

    const imageClickHandler = (filename) => {
        alert(filename);
    };

    return (
        <div style={{ display: "flex", flexWrap: "wrap"}}>
            {images.map((image) => (
                <div key={image.key} style={{ width: "200px", height: "200px" }} onClick={() => imageClickHandler(image.key)}>
                    <img src={image.url} alt={image.key} style={{ width: "100%", height: "100%"}}></img>
                </div>
            ))}
        </div>
    );
}

export default GalleryPage;