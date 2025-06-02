"use client";

import React from "react";
import { TabGroup, TabList, TabPanels, TabPanel } from "@headlessui/react";
import Image from "next/image";
import { Image as ImageType } from "../../../types";
import SideGallery from "./side-gallery";

interface GalleryProps {
  images: ImageType[];
}

const Gallery = ({ images }: GalleryProps) => {
  return (
    <TabGroup className="flex flex-col">
      
      {/**Main Picture */}
      <TabPanels className="aspect-square w-full">
        {images.map((image) => (
          <TabPanel key={image.id}>
            <div className="aspect-square relative w-full h-full sm:rounded-lg overflow-hidden">
              <Image
                priority
                fill
                src={image.url}
                alt="Image"
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </TabPanel>
        ))}
      </TabPanels>

      {/** Other Side Pictures */}
      <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
        <TabList className="grid grid-cols-4 gap-6">
          {images.map((image) => (
            <SideGallery key={image.id} image={image} />
          ))}
        </TabList>
      </div>
    </TabGroup>
  );
};

export default Gallery;
