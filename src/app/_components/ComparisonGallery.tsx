'use client'
import Image from 'next/image';
import React from 'react';

// Define prop types
type ImageArray = string[] | undefined;

interface ComparisonGalleryProps {
  folder: string;
  images: ImageArray;
}

const ComparisonGallery: React.FC<ComparisonGalleryProps> = ({ folder, images }) => {
  // Create array of before/after pairs
  const imagePairs = images?.map((value, index) => ({
    before: `/images/before/${value}`,
    after: `/images/after/${value}`,
    title: `Image ${index + 1}`,
  })) || [];

  //console.log('Image pairs:', imagePairs);

  return (
    <div className="flex-1 h-2/3 overflow-auto bg-white">
      {/* Gallery Grid */}
      <div className="container mx-auto px-4 py-4">
        {imagePairs.length > 0 ? (
          imagePairs.map((pair, index) => (
            <div
              className="grid grid-cols-2 gap-4 mb-8"
              key={`pair-${index}`}
            >
              {/* Before Image */}
              <Image
                className="ba-image object-contain w-full h-[300px] md:h-[400px]"
                width={400}
                height={300}
                src={pair.before}
                alt={`Before ${pair.title}`}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* After Image */}
              <Image
                className="ba-image object-contain w-full h-[300px] md:h-[400px]"
                width={400}
                height={300}
                src={pair.after}
                alt={`After ${pair.title}`}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          ))
        ) : (
          <p className="text-center text-lg">No images available.</p>
        )}
      </div>
    </div>
  );
};

export default ComparisonGallery;