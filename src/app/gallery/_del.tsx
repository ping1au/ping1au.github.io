import React from 'react'
import Footer from "../_components/footer";
import Navigation from "../_components/navigation";
import Gallery from "./Gallery";

import Image from 'next/image';
import { useRouter } from 'next/router'
import { GetServerSideProps } from 'next';

import doozer from '../../../public/images/basements/20210928_190536.jpg'
import ziz from '../../../public/images/basements/20210928_190536.jpg'
import horn from '../../../public/images/basements/20210928_190536.jpg'

export default function GGallery({ slug }: { slug: string }) {
    const router = useRouter();
    console.log("Hi" + router.query.slug);
    let image = doozer;
    console.log(image);
    switch (slug) {
        case 'hinkle-horns':
            image = horn;
            break;
        case 'zizzer-zazzers':
            image = ziz;
            break;
        default:
            image = doozer;
    }
    // let title = slug.replace('-', ' ').toUpperCase();
    let title = slug.charAt(0).toUpperCase() + slug.slice(1);

    return <main className="flex flex-col min-h-screen bg-zinc-300">
        <Navigation />
        {/* <div className="py-10 max-w-lg mx-auto flex flex-col gap-6">
            <h1 className="text-4xl text-center font-medium">{title}</h1>
            <Image src={image} alt={title} width={1024} height={1024} />
        </div> */}
        {/* <Gallery /> */}
        <Footer/>
    </main>
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    //const slug = context?.params?.slug;
    const slug = context;
    console.log(slug);
    return {
        props: {
            slug
        }
    }
};