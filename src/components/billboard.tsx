import React from "react";
import { Billboard as BillboardType } from "../../types";
import Image from "next/image";

interface BillboardProps {
  data: BillboardType;
}

const Billboard = ({ data }: BillboardProps) => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      <div className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover">
        {/* image billboard */}
        <Image
          src={data.imageUrl}
          alt={data.label}
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
          <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs text-white/90 z-10">
            {data.label}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
