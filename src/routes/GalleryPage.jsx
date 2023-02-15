import React, { useEffect, useState } from "react";
import { Storage } from 'aws-amplify';
import {
    Grid,
    Image,
    Flex,
    Heading,
  } from '@aws-amplify/ui-react';

import { requestInference } from "../api/RequestInference"
import { withAuthenticator } from "@aws-amplify/ui-react";




  

function GalleryPage() {

    const [images, setImages] = useState([]);

    useEffect(() => {
      const fetchImages = async () => {
        try {
          const imageList = await Storage.list('images/');
          console.log('objects: ', imageList);
          console.log('images: ', imageList.results);
          imageList.results = imageList.results.filter(item => item.key !== "images/");
          console.log('imagestake2: ', imageList.results);
          const imageUrls = await Promise.all(
            imageList.results.map(async (image) => {
                const imageUrl = await Storage.get(image.key);
                return { ...image, url: imageUrl };
            })
          );
          setImages(imageUrls);
        } 
        catch (error) {
          console.error(error)
        }
      };
      fetchImages();
    }, []);

    const imageClickHandler = async (filename) => {
        let s3Key = "public/" + filename;
        console.log("s3Key: ", s3Key);
        const apiResponse = await requestInference(s3Key);
        console.log("APIIIII: ", apiResponse);
        let result = apiResponse["result"];
        let dispString = "";
        if (result === "1") {
            dispString = "This Digit is a 0!";
        }
        else{
            dispString = "This Digit is not a 0!";
        }
        alert(dispString);
    };

    return (
        <>
            <Flex direction="column" alignItems="center" style={{ backgroundColor: "rgb(255, 251, 240)" }}>
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
                                <Image src={image.url} alt={image.key} style={{ width: "100%", height: "100%", borderRadius: "12px"}} />
                            </div>
                        ))}
                    </Grid>
                </div>
            </Flex>
        </>
    );
}

export default withAuthenticator(GalleryPage);