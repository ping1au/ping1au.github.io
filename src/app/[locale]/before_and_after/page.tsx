export const metadata = {
    title: "FDC Before and After Renovations",
    description: "Check out different areas before and after our thorough and professional renovations.",
  }
  
import React from "react";
import ComparisonGallery from "@/app/_components/ComparisonGallery";
import { getImages } from '@/app/_components/getImage';
import { getLocale } from "next-intl/server";

// export async function generateMetadata({ params }: { params: { locale: string } }){
//     const { locale } = params;
//     console.log("locale is " + locale);
//     const messages = (await import(`../../../../message/${locale}.json`)).default;

//     // return an object
//     return {
//         title: messages.BeforeAfterPage.metadata.title,
//         description: messages.BeforeAfterPage.metadata.description,
//     };
// }

export default async function BeforeAfterPage() {
  
    /* Reads the content of the gallery sub dir and returns an array of strings */
    const beforeImageFilenames =  await getImages("before", '');
    const afterImageFilenames =  await getImages("after", '');
    // const words = await getTranslatedtext();
    const locale = await getLocale();
    const before = "BEFORE";
    const after = "AFTER";
    return (
        <>
            <main className="common-page-container">
                <div className="container flex flex-col justify-center items-center w-full m-auto">
                {/* 1st row */}
                    <div className="container grid grid-cols-7 m-auto w-full">
                        {/* before */}
                        <div className="ba-header col-span-3 w-full flex items-center justify-center">
                                {locale=="en" ? "BEFORE" : "AVANT"}
                        </div>
                        {/* arrow */}
                        <div className="gallery-container w-full flex items-center justify-center">
                                
                        </div>
                        {/* after */}
                        <div className="ba-header col-span-3 w-full flex items-center justify-center">
                                {locale=="en" ? "AFTER" : "APRÈS"}
                        </div>
                    </div>
                    
                    {/* 2nd row onwards */}
                    
                <ComparisonGallery folder="before" images={beforeImageFilenames}/>
                
                </div>
            </main>
        </>
    )
  }