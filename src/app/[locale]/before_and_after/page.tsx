// export const metadata = {
//     title: "FDC Before and After Renovations",
//     description: "Areas before and after our renovations",
//   }
  
  import React from "react";
  import ComparisonGallery from "@/app/_components/ComparisonGallery";
  import { getImages } from '@/app/_components/getImage';
  import { getLocale } from "next-intl/server";

  export const getTranslatedtext = async () =>  {
    try {
        const locale = await getLocale();
        console.log("locale is " + locale);
        let beforeText = "";
        let afterText = "";
        
        if (locale == "en") {
            beforeText = "BEFORE";
            afterText = "AFTER";
        } else {
            beforeText = "AVANT";
            afterText = "APRÈS";
        }
        return (
            {
                before: beforeText,
                after: afterText,
            });
    } catch (error: any) {
        console.log(error);
    }
}

export default async function BeforeAfterPage() {
  
    /* Reads the content of the gallery sub dir and returns an array of strings */
    const beforeImageFilenames =  await getImages("before");
    const afterImageFilenames =  await getImages("after");
    const words = await getTranslatedtext();
    const before = words?.before!;
    const after = words?.after!;
    return (
        <>
            <main className="common-page-container">
                <div className="container flex flex-col justify-center items-center w-full m-auto">
                {/* 1st row */}
                    <div className="container grid grid-cols-7 m-auto w-full">
                        {/* before */}
                        <div className="ba-header col-span-3 w-full flex items-center justify-center">
                                {before}
                        </div>
                        {/* arrow */}
                        <div className="gallery-container w-full flex items-center justify-center">
                                
                        </div>
                        {/* after */}
                        <div className="ba-header col-span-3 w-full flex items-center justify-center">
                                {after}
                        </div>
                    </div>
                    
                    {/* 2nd row onwards */}
                    
                <ComparisonGallery folder="before" images={beforeImageFilenames}/>
                
                </div>
            </main>
        </>
    )
  }