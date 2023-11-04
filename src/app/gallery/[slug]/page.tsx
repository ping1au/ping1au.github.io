import React from 'react'
import Footer from "../../_components/footer";
import Navigation from "../../_components/footer";
import Gallery from "../../_components/Gallery";
import { getImages } from '../../_components/getImage';
import { Metadata } from 'next'

import Image from 'next/image';

const galleryPages = ['basements', 'bathrooms', 'fireplaces', 'kitchens', 'outdoor', 'stairs', 'tilings'];

type Props = {
    params: { id: string }
  }

export async function generateMetadata(
    { params }: Props
  ): Promise<Metadata> {
    // read route params
    const id = params.id
   
    // // fetch data
    // const product = await fetch(`https://.../${id}`).then((res) => res.json())
   
    // // optionally access and extend (rather than replace) parent metadata
    // const previousImages = (await parent).openGraph?.images || []
   
    return {
        title: 'FDC Gallery',
        description: 'Check out the galleries for different areas renovated by FDC Renovations!',
    }
  }

export default async function Page({ params }: { params: { slug: string } })  {
    const { slug } = params;

    /* Reads the content of the gallery sub dir and returns an array of strings */
    const imageFilenames = await getImages(slug);

    let intro = "";
    //let remarks = "";
    switch (slug) {
        case 'basements':
            intro = "Unfinished basements, repairs due to water damage or floods, room or bathroom addition, new flooring.\n";
            break;
        case 'bathrooms':
            intro = "Whether it’s a complete remodel or expansion or just a refresh, we will guide you though every step using only quality materials. The end result is a beautiful bathroom at costs that will surprise you – in a good way.\n";
            break;
        case 'fireplaces':
            intro = "Complete new custom installs or simple gas/wood/electric conversions. We can make your fireplace be a focal point using unique designs & materials that will catch everyone's eye.\n";
            break;
        case 'kitchens':
              intro = "Open concepts and expansions or simple updates and refreshes. \n" +
              "Using stock cabinets & counter options for those on a tight budget or using custom high end materials, we will assist you to complete the most important space and add value to your home.";
              break;
        case 'outdoor':
              intro = "Pergolas, Gazebos, small pool surrounds, large multilevel deck spaces using a variety of wood or composite materials such as TimberTech® , Trex®, Veranda®.\n" +
              "We also offer 3 season enclosure options using high quality fabrics such as Sunbrella®.\n";
              break;
        case 'stairs':
              intro = "Detailed millwork using any variety of hardwood or laminate materials with many color stain options on stairs and railings.\n";
              break;
        default: //Tilings
            intro = "Mosaics, large/small formats, subway, textured, tile on tile. \n" +
            "We will help you visualize and make your project come to life making plans. \n";
    }

    return <main className='min-h-screen'>
      <div className='flex flex-col justify-center items-center self-center text-base md:text-lg lg:text-lg xl:text-lg' style={{whiteSpace: "pre-wrap"}}>
          <div className='flex justify-center items-center gallery-header self-center text-base md:text-lg lg:text-xl xl:text-2xl'>
                {slug.charAt(0).toUpperCase() + slug.slice(1)}
            </div>
            <div className="intro-container sm:px-16 md:px-32 lg:px-32 xl:px-32 text-base md:text-base lg:text-lg xl:text-lg">
                {intro}
            </div>
      </div>
        
        {/* <Gallery/> */}
        <Gallery folder={slug} images={imageFilenames}  />

        </main>
    
    // <main className="flex flex-col min-h-screen bg-zinc-300">
        
    //     <Gallery />
    // </main>
}

export async function generateStaticParams() {
    return [{slug:'basements'}, 
    {slug:'bathrooms'}, 
    {slug:'fireplaces'},
    {slug:'kitchens'}, 
    {slug:'outdoor'},
    {slug:'stairs'}, 
    {slug:'tilings'}];
    // return galleryPages.map((page) => ({ page }))
    // return [{ slug: 'basements' }, 
    //         { slug: 'bathrooms' }, 
    //         { slug: 'fireplaces' }, 
    //         { slug: 'kitchens' }, 
    //         { slug: 'outdoor' },
    //         { slug: 'stairs' },  
    //         { slug: 'tilings' }]
  }
   
  // Three versions of this page will be statically generated
  // using the `params` returned by `generateStaticParams`
  // - /gallery/basements
  // - /gallery/bathrooms
  // - /gallery/fireplaces

