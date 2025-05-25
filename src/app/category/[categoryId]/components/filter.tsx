"use client";

import React from "react";
import { Color, Size } from "../../../../../types";
import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";

interface FilterProps {
  data: (Size | Color)[];
  name: string;
  valueKey: string;
}

// EX: https://localhost.com/category/shoes?colorId=blue&sizeId=42

const Filter = ({ data, name, valueKey }: FilterProps) => {
  const router = useRouter();

  const searchParams = useSearchParams();
  const selectedValue = searchParams.get(valueKey); // get("colorId") ---→ value = "blue"

  const onClick = (id: string) => {

    // searchParams.toString() --->      "colorId=blue&sizeId=42"      ( String )
    // qs.parse(...) ------------->  { colorId: "red", sizeId: "42" }  ( Object )

    const current = qs.parse(searchParams.toString()); 
    
    // update query like colorId: "red" --> "blue"
    const query = {
      ...current,
      [valueKey]: id,
    };

    // Toggle เมื่อคลิ๊กซ้ำ ให้เป็น null
    if (current[valueKey] === id) {
      query[valueKey] = null;
    }

    const url = qs.stringifyUrl(
      {
        url: window.location.href, //  Base URL: current full url
        query, // Append New: update new query
      },
      { skipNull: true }
    );

    router.push(url);
  };

  return (
    <div className="mb-8">
      {/**Filter Name */}
      <h3 className="text-lg font-semibold">{name}</h3>

      <hr className="my-4" />

      <div className="flex flex-wrap gap-2">
        {data.map((filter) => (
          <div key={filter.id} className="flex items-center">
            <Button
              onClick={() => onClick(filter.id)}
              className={cn(
                "rounded-md text-sm text-gray-800 p-2 border border-gray-300 bg-white",
                selectedValue === filter.id && "bg-black text-white"
              )}
            >
              {filter.name}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
