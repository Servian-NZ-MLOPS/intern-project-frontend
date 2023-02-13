import React, { useEffect, useState } from "react";
import { Storage } from 'aws-amplify';
import {
    Grid,
    Image,
    useTheme,
    Flex,
    Heading,
  } from '@aws-amplify/ui-react';



  

function GalleryPage() {

    const [images, setImages] = useState([]);
    const { tokens } = useTheme();//test

    useEffect(() => {
      const fetchImages = async () => {
        try {
          const imageList = await Storage.list('images/');
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
        <>
            <Flex direction="column" alignItems="center">
                <Heading level={2}>
                    Gallary Inference
                </Heading>
                <div style={{ display: "flex", flexWrap: "wrap"}}>
                    <Grid 
                        columnGap="20px"
                        rowGap="20px"
                        templateColumns="1fr 1fr 1fr 1fr"
                    >
                        {images.map((image) => (
                            <div key={image.key} style={{ width: "200px", height: "200px" }} onClick={() => imageClickHandler(image.key)}>
                                <Image src={image.url} alt={image.key} style={{ width: "100%", height: "100%"}} />
                            </div>
                        ))}
                    </Grid>
                </div>
            </Flex>
        </>
    );
}

export default GalleryPage;