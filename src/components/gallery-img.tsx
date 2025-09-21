"use client";
import clsx from "clsx";
import Link from "next/link";
import { useState, useEffect } from "react";
import { CldImage } from "next-cloudinary";

export default function GalleryImg({ id }: { id: string }) {
  return (
    <>
      <CldImage
        className="rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out my-8"
        src={id}
        alt="Blue hour at Lake Tekapo, New Zealand"
        width="6000"
        height="4000"
        crop={{
          type: "auto",
          source: true,
        }}
      />
    </>
  );
}
