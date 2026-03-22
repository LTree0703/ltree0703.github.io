"use client";
import clsx from "clsx";
import Link from "next/link";
import { useState, useEffect } from "react";
import { CldImage } from "next-cloudinary";

export default function GalleryImg({ id, alt }: { id: string; alt: string }) {
  return (
    <CldImage
      className="rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out my-8"
      src={id}
      alt={alt}
      width="6000"
      height="4000"
      crop={{
        type: "fill",
        source: true,
      }}
    />
  );
}
