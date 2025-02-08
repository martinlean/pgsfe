"use client";

import React from "react";

import { cn } from "@/lib/utils";
import Image from "next/image";

interface AvatarCirclesProps {
  className?: string;
  avatarUrls: string[];
}

export const AvatarCircles = ({
  className,
  avatarUrls
}: AvatarCirclesProps) => {
  return (
    <div
      className={cn(
        "z-10 flex -space-x-4 rtl:space-x-reverse w-[15%] sm:w-[17%] lg:w-[15%]",
        className
      )}
    >
      {avatarUrls.map((url, index) => (
        <Image
          key={index}
          className="rounded-full"
          src={url}
          width={200}
          height={200}
          alt={`Avatar ${index + 1}`}
        />
      ))}
    </div>
  );
};
