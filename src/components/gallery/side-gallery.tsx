import React from "react";
import Image from "next/image";
import { Image as ImageType } from "../../../types";
import { cn } from "@/lib/utils";
import { Tab } from "@headlessui/react";

interface SideGalleryProp {
  image: ImageType;
}

const SideGallery = ({ image }: SideGalleryProp) => {
  return (
    <Tab className="relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white">
      {({ selected }) => (
        <div>
          <span className="absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md">
            <Image
              priority={false}
              loading="lazy"
              fill
              src={image.url}
              alt="image"
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </span>
          <span
            className={cn(
              "absolute inset-0 ring-2 ring-offset-2",
              selected ? "ring-black" : "ring-transparent"
            )}
          />
        </div>
      )}
    </Tab>
  );
};

export default SideGallery;
