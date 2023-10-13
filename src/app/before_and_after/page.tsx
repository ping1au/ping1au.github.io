export const metadata = {
  title: "FDC-Before and After",
  description: "Areas before and after our renovations",
}

import React from "react";
import { promises as fs } from 'fs'
// import { baGallery } from "../gallery/ba-Gallery";
import path from 'path'
import Image, { ImageProps } from 'next/image';
import BaGallery from "../_components/BaGallery";
import { getImages } from '../_components/getImage';

type ImageArray = string[] | undefined;

export default async function Page() {

  /* Reads the content of the gallery sub dir and returns an array of strings */
  const beforeImageFilenames =  await getImages("before");
  const afterImageFilenames =  await getImages("after");

  return (
    <>
       <div className="container grid grid-cols-2 divide-x-4 divide-amber-500 m-auto">
          <div className="before-container flex-col">
              <div className="flex justify-center items-center ba-header self-center">BEFORE</div>
              <div className="gallery-container w-full flex items-center justify-center flex-col">
                  <BaGallery folder="before" images={beforeImageFilenames}  />
              </div>
           </div>
           <div className="after-container flex-col">
              <div className="flex justify-center items-center ba-header self-center">AFTER</div>
              <div className="gallery-container w-full flex items-center justify-center flex-col">
                  <div>
                    <BaGallery folder="after" images={afterImageFilenames}  />
                  </div>
              </div>
            </div>
        </div>
     </>

  )
}

// // export const revalidate = 10;
// export const dynamic = 'force-static';

// export const BAGallery = ({ images, onClick }: { images: Array<string> | undefined, onClick?: ImageProps["onClick"] }) => {
//   return (
//     <>
//       <div className="container grid grid-cols-2 divide-x-4 divide-amber-500 m-auto">
//           <div className="before-container flex-col">
//             <div className="flex justify-center items-center ba-header self-center">BEFORE</div>
//             <div className="gallery-container w-full flex items-center justify-center flex-col">
//               <div>
//                 {images &&
//                   images.map((el: string) => (
//                     <Image
//                       className='before-image'
//                       // width={150}
//                       // height={150}
//                       // style={{ width: '100%' }}
//                       width={0}
//                       height={0}
//                       sizes="100vw"
//                       style={{ width: '100%', height: 'auto' }} // optional
//                       alt={'alt'}
//                       src={`/images/before/${el}`}
//                       key={el}
//                       onClick={onClick ? onClick : undefined}
//                     />
//                   ))}
//               </div>
              
//             </div>
//           </div>
//           <div className="after-container flex-col">
//             <div className="flex justify-center items-center ba-header self-center">AFTER</div>
//             <div className="gallery-container w-full flex items-center justify-center flex-col">
//               <div>
//                   {images &&
//                     images.map((el: string) => (
//                       <Image
//                         className='after-image'
//                         // width={150}
//                         // height={150}
//                         // style={{ width: '100%' }}
//                         width={0}
//                         height={0}
//                         sizes="100vw"
//                         style={{ width: '100%', height: 'auto' }} // optional
//                         alt={'alt'}
//                         src={`/images/after/${el}`}
//                         key={el}
//                         onClick={onClick ? onClick : undefined}
//                       />
//                     ))}
//                 </div>
//             </div>
//           </div>
//       </div>
      
//     </>
//   )
// }

// const Before_and_After = async () => {
//   const imageFilenames = await getBeforeImages();
//   console.log(imageFilenames);
//   return (
//     <>
//       <BAGallery images={imageFilenames} />
//     </>
//   );
// };

// export const getBeforeImages = async (): Promise<ImageArray> => {
//   try {
//       /* Grabs path to public/midj */
//       const imageDirectory = path.join(process.cwd(), 'public/images/before');

//       /* Reads the content of the midj dir and returns an array of strings */
//       const imageFilenames: ImageArray = await fs.readdir(imageDirectory)

//       return imageFilenames
//   } catch (error: any) {
//       console.error(error)
//   }
// }

// export const getAfterImages = async (): Promise<ImageArray> => {
//   try {
//       /* Grabs path to public/midj */
//       const imageDirectory = path.join(process.cwd(), '/public/images/after');

//       /* Reads the content of the midj dir and returns an array of strings */
//       const imageFilenames: ImageArray = await fs.readdir(imageDirectory)

//       return imageFilenames
//   } catch (error: any) {
//       console.error(error)
//   }
// }

//export default Before_and_After;