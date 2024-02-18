"use client";
import Image, { ImageProps } from 'next/image'
import React, { useState } from "react";
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

//const Gallery = () => {
//const Gallery = ({ images, onClick }: { images: Array<string> | undefined, onClick?: ImageProps["onClick"] }) => {
const Gallery: React.FC<MyComponentProps> = ({folder, images}) => {

  const [open, setOpen] = useState(false);
  const [image, setImage] = useState("");
  const [index, setIndex] = React.useState(-1);
  const pathname = usePathname();

  const galleryArray: { imageUrl: string; title: string }[] = [];

  images?.forEach((value, index) => {
    let url = "";
    if (folder == "fdc_fix" && pathname.includes("fr")) {
      url = "../../images/" + folder + "/fr/" +value;
    } else if (folder == "fdc_fix" && pathname.includes("en")) {
      url =  "../../images/" + folder +"/en/" + value;
    } 
    else {
      url =  "../../images/" + folder + "/" +value;
    }
   // const url =  "../../images/" + folder +"/"+value;
    // to give dynamic link
    if (folder != "fdc_fix") {
        value = "";
    }
    const galleryObj = { imageUrl: url, title: value.slice(0,-5) };
    galleryArray.push(galleryObj);
  });

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

  return (
    <div className="py-1 w-full gallery-container">
      <div className=" ">
        {/* <div className="flex flex-col md:grid md:grid-cols-5 h-full gap-1 flex-wrap mx-2 md:mx-0"> */}
        <div className="flex flex-col md:grid md:grid-cols-5 h-full gap-1 flex-wrap mx-2 md:mx-0">
          {galleryArray.map((x, index) => {
            return (
              <div key={index} className="md:h-[15vw] lg:h-[15vw] xl:h-[15vw] 2xl:h-[15vw] h-screen relative"> {/*originally h-[50vw]*/}
                <div className="group h-full">
                  <div className="sm:bg-cover md:bg-cover lg:bg-contain xl:bg-contain 2xl:bg-contain bg-contain bg-cover bg-center h-full w-full bg-no-repeat"
                    style={{ backgroundImage: `url("${x.imageUrl}")` }}>
                  </div>
                  {/* <div className="bg-white text-xl text-black absolute bottom-0 left-2 z-10"> */}
                  <div className="bg-white w-full text-xl text-black absolute z-10 bottom-0 flex justify-center items-center">
                        <div><span className = 'text-center'>{x.title}</span></div>
                  </div>
                  <div
                    className="bg-black opacity-0 group-hover:opacity-75 absolute inset-0 flex items-center justify-center transition-all duration-300 ease-in-out"
                    onClick={() => {
                      setOpen(true);
                      setImage(x.imageUrl);
                      setIndex(index);
                    }}
                  >
                    <p className="text-white">
                      <AiOutlineExpandAlt className="text-5xl border w-16 h-16 bg-neutral-500 hover:bg-white hover:text-black p-3 cursor-pointer rounded-full" />
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        plugins={[Zoom]}
        //showPrevNext={false}
        slides={slides}
        index={index}
      />
    </div>
    // <>
    //     <div className="w-full">
    //     {images &&
    //         images.map((el: string) => (
    //         <Image
    //             className="hi"
    //             width={150}
    //             height={150}
    //             alt={`${currentPage} photo`}
    //             src={`/images/${currentPage}/${el}`}
    //             key={el}
    //             onClick={onClick ? onClick : undefined}
    //         />
    //         ))}
    //     </div>
    // </>
  );
};

export default Gallery;