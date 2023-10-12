'use client'
import Image, { ImageProps } from 'next/image';
import React, { useState } from "react";


// import styles from 'styles/page.module.css'
// const { grid, card } = styles

// Define the prop types for the component
type ImageArray = string[] | undefined;

interface MyComponentProps {
  folder: string;
  images: ImageArray;
}

const BaGallery: React.FC<MyComponentProps> = ({folder, images}) => {

  const [open, setOpen] = useState(false);
  const [image, setImage] = useState("");

  const galleryArray: { imageUrl: string; title: string }[] = [];

  images?.forEach((value, index) => {
    const url =  "/images/" + folder +"/"+value;
    const galleryObj = { imageUrl: url, title: (index + 1).toString() };
    galleryArray.push(galleryObj);
  });

  return (
    <div className="my-1 gallery-container">
      <div className="">
        <div className="flex flex-col h-full gap-1 flex-wrap">
          {galleryArray.map((x, index) => {
            return (
              // <div key={index} className="gallery-container md:h-[50vw] h-screen relative">
              //   <div className="group h-full">
              //     <div
              //       className="bg-cover bg-center h-full w-full bg-no-repeat"
              //       style={{ backgroundImage: `url("${x.imageUrl}")` }}
              //     >
              //       <div className="text-3xl text-white absolute bottom-0 left-2 z-10">
              //         <div>{x.title}</div>
              //       </div>
              //     </div>
              //   </div>
              // </div>
              <div className='flex-none text-center fill-current py-4 items-center' key={index}><Image
                    className='ba-image'
                    width={400}
                    height={300}
                    // layout="fill"
                    // objectFit="cover"
                    alt={'alt'}
                    src={x.imageUrl}
                    key={x.title}
                    // onClick={onClick ? onClick : undefined}
                  /></div>
            );
          })}
        </div>
      </div>
      
    </div>
  );
};

export default BaGallery;

// export const BaGallery = ({ images, onClick }: { images: Array<string> | undefined, onClick?: ImageProps["onClick"] }) => {
//   return (
//     <>
//       <div className="container grid grid-cols-2 divide-x-4 divide-amber-500">
//           <div className="before-container flex-col">
//             <div className="flex justify-center items-center ba-header self-center">BEFORE</div>
//             <div className="gallery-container">
//               {images &&
//                 images.map((el: string) => (
//                   <Image
//                     className='before-image'
//                     width={150}
//                     height={150}
//                     alt={'alt'}
//                     src={`/images/before/${el}`}
//                     key={el}
//                     onClick={onClick ? onClick : undefined}
//                   />
//                 ))}
//             </div>
//           </div>
//           <div className="after-container flex-col">
//             <div className="flex justify-center items-center ba-header self-center">AFTER</div>
//             <div className="gallery-container">
//               {images &&
//                 images.map((el: string) => (
//                   <Image
//                     className='after-image'
//                     width={150}
//                     height={150}
//                     alt={'alt'}
//                     src={`/images/after/${el}`}
//                     key={el}
//                     onClick={onClick ? onClick : undefined}
//                   />
//                 ))}
//             </div>
//           </div>
//       </div>
      
//     </>
//   )
// }