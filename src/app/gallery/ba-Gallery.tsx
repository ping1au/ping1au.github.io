'use client'
import Image, { ImageProps } from 'next/image';

// import styles from 'styles/page.module.css'
// const { grid, card } = styles

export const baGallery = ({ images, onClick }: { images: Array<string> | undefined, onClick?: ImageProps["onClick"] }) => {
  return (
    <>
      <div className="container grid grid-cols-2 divide-x-4 divide-amber-500">
          <div className="before-container flex-col">
            <div className="flex justify-center items-center ba-header self-center">BEFORE</div>
            <div className="gallery-container">
              {images &&
                images.map((el: string) => (
                  <Image
                    className='before-image'
                    width={150}
                    height={150}
                    alt={'alt'}
                    src={`/images/before/${el}`}
                    key={el}
                    onClick={onClick ? onClick : undefined}
                  />
                ))}
            </div>
          </div>
          <div className="after-container flex-col">
            <div className="flex justify-center items-center ba-header self-center">AFTER</div>
            <div className="gallery-container">
              {images &&
                images.map((el: string) => (
                  <Image
                    className='after-image'
                    width={150}
                    height={150}
                    alt={'alt'}
                    src={`/images/after/${el}`}
                    key={el}
                    onClick={onClick ? onClick : undefined}
                  />
                ))}
            </div>
          </div>
      </div>
      
    </>
  )
}