"use client";
import Image, { ImageProps } from 'next/image';
import React, { useState, useEffect, useMemo } from "react";
import { usePathname } from 'next/navigation';
import { AiOutlineExpandAlt } from "react-icons/ai";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import { getImages } from './getImage';
type ImageArray = string[] | undefined;

// Define the prop types for the component
interface MyComponentProps {
    folder: string;
    images: ImageArray;
}

const Gallery: React.FC<MyComponentProps> = ({ folder, images }) => {

  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [index, setIndex] = React.useState(-1);
  const pathname = usePathname();

  const galleryArray = useMemo(() => {
    const arr: { imageUrl: string; title: string }[] = [];
    images?.forEach((value, index) => {
      let url = "";
      if (folder === "fdc_fix" && pathname.includes("fr")) {
        url = "../../images/" + folder + "/fr/" + value;
      } else if (folder === "fdc_fix" && pathname.includes("en")) {
        url = "../../images/" + folder + "/en/" + value;
      } else {
        url = "../../images/" + folder + "/" + value;
      }
      if (folder !== "fdc_fix") {
        value = "";
      }
      const galleryObj = { imageUrl: url, title: value.slice(0, -5) };
      arr.push(galleryObj);
    });
    return arr;
  }, [folder, images, pathname]);

  useEffect(() => {
    if (galleryArray.length > 0) {
      setSelectedImage(galleryArray[0].imageUrl);
    }
  }, [galleryArray]);

  const slides = galleryArray.map((item) => ({
    src: item.imageUrl,
    width: 3840,
    height: 2560,
    srcSet: [
      { src: item.imageUrl, width: 320, height: 213 },
      { src: item.imageUrl, width: 640, height: 426 },
      { src: item.imageUrl, width: 1200, height: 800 },
      { src: item.imageUrl, width: 2048, height: 1365 },
      { src: item.imageUrl, width: 3840, height: 2560 },
    ],
  }));

  const handlePrev = () => {
    console.log("handlePrev called");
    if (selectedImage && galleryArray.length > 0) {
      const currentIndex = galleryArray.findIndex(item => item.imageUrl === selectedImage);
      console.log("Current Index:", currentIndex);
      const prevIndex = (currentIndex - 1 + galleryArray.length) % galleryArray.length;
      console.log("Prev Index:", prevIndex, "New Image:", galleryArray[prevIndex].imageUrl);
      setSelectedImage(galleryArray[prevIndex].imageUrl);
      console.log("Updated Selected Image:", galleryArray[prevIndex].imageUrl); // Debug post-update
    }
  };

  const handleNext = () => {
    console.log("handleNext called");
    if (selectedImage && galleryArray.length > 0) {
      const currentIndex = galleryArray.findIndex(item => item.imageUrl === selectedImage);
      console.log("Current Index:", currentIndex);
      const nextIndex = (currentIndex + 1) % galleryArray.length;
      console.log("Next Index:", nextIndex, "New Image:", galleryArray[nextIndex].imageUrl);
      setSelectedImage(galleryArray[nextIndex].imageUrl);
      console.log("Updated Selected Image:", galleryArray[nextIndex].imageUrl); // Debug post-update
    }
  };

  return (
    <div className="px-16 w-full min-h-screen gallery-container">
        <div className="big-photo relative" key={selectedImage}> {/* Add key to force re-render */}
          {selectedImage && (
            <>
              <div
                className="bg-contain bg-center h-screen w-full bg-no-repeat cursor-pointer"
                style={{ backgroundImage: `url("${selectedImage}")` }}
                onClick={() => {
                  const currentIndex = galleryArray.findIndex(item => item.imageUrl === selectedImage);
                  setIndex(currentIndex);
                  setOpen(true);
                }}
              />
              <button
                onClick={handlePrev}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 border-2 border-gray-200 text-gray-200 text-4xl px-2 rounded-full hover:text-gray-600 z-50"
                style={{ zIndex: 60 }}
              >
                &lt;
              </button>
              <button
                onClick={handleNext}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 border-2 border-gray-200 text-gray-200 text-4xl px-2 rounded-full hover:text-gray-600 z-50"
                style={{ zIndex: 60 }}
              >
                &gt;
              </button>
            </>
          )}
        </div>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        plugins={[Zoom]}
        slides={slides}
        index={index}
      />
    </div>
  );
};

export default Gallery;