"use client";
import clsx from "clsx";
import Link from "next/link";
import { useState, useEffect } from "react";
import { CldImage } from "next-cloudinary";

export default function GalleryImg({ id }: { id: string }) {
  return (
    <>
      <CldImage
        className="rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
        src={id}
        alt="Blue hour at Lake Tekapo, New Zealand"
        width="1000"
        height="600"
        crop={{
          type: "auto",
          source: true,
        }}
      />
    </>
  );
}
