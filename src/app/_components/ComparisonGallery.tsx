'use client'
import Image, { ImageProps } from 'next/image';
import React, { useState } from "react";

// Define the prop types for the component
type ImageArray = string[] | undefined;

interface MyComponentProps {
  folder: string;
  images: ImageArray;
}

const ComparisonGallery: React.FC<MyComponentProps> = ({images}) => {

  const [open, setOpen] = useState(false);
  const [image, setImage] = useState("");

  const beforeGalleryArray: { imageUrl: string; title: string }[] = [];
  const afterGalleryArray: { imageUrl: string; title: string }[] = [];
  const galleryArray: { imageUrl: string; title: string }[] = [];

  images?.forEach((value, index) => {
      const beforeUrl =  "../images/before/"+value;
      const afterUrl = "/images/after/"+value;
      const beforeGalleryObj = { imageUrl: beforeUrl, title: "before" + (index + 1).toString() };
      const afterGalleryObj = { imageUrl: afterUrl, title: "after" + (index + 1).toString() };
      // const arrowObj = {imageUrl: "/images/arrow.png", title: "arrow"};
      // galleryArray.push(beforeGalleryObj);
      // galleryArray.push(arrowObj);
      // galleryArray.push(afterGalleryObj);
      beforeGalleryArray.push(beforeGalleryObj);
      afterGalleryArray.push(afterGalleryObj);
  });

  return (
    <>
        {beforeGalleryArray.map((x, index) => {
                return (
                  <div className="container grid grid-cols-7 m-auto w-full" key={'bigDiv'+index}>
                        <div className="col-span-3 gallery-container w-full flex items-center justify-center py-4" key={'divbefore'+index}>
                            <Image
                                className='ba-image'
                                width={400}
                                height={300}
                                // layout="fill"
                                // objectFit="cover"
                                alt={'alt'}
                                src={`../images/before/${index+1}.webp`}
                                key={'before' + index+1}
                                style={{ width: '100%' }}
                                // onClick={onClick ? onClick : undefined}
                              />
                          </div>
                          <div className="w-full flex justify-center items-center  py-4" key={'arrow' + index}>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#F15A29" className="w-full">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
</svg>

                          </div>
                          <div className="col-span-3 gallery-container w-full flex items-center justify-center py-4" key={'divafter'+index}>
                            <Image
                                className='ba-image'
                                width={400}
                                height={300}
                                // layout="fill"
                                // objectFit="cover"
                                alt={'alt'}
                                src={`../images/after/${index+1}.webp`}
                                key={'after'+ index+1}
                                style={{ width: '100%' }}
                                // onClick={onClick ? onClick : undefined}
                              />
                            </div>
                    
                  </div>
                  
                    
                );
              })}
    </>
        
    
  );
};

export default ComparisonGallery;