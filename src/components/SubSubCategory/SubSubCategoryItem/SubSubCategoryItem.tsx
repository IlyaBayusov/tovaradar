"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

type Props = {
  id: string;
  img: StaticImageData;
  name: string;
  prevCategory: string;
};

export default function SubSubCategoryItem({ id, img, name }: Props) {
  const path = useParams();

  return (
    <Link
      href={`/${path.category}/${path.subcategory}/${id}`}
      className="flex-[1_1_calc(25%-1rem)] flex flex-col justify-center items-center p-5 shadow-xl bg-[#FCFFFC] rounded-lg"
    >
      <Image src={img} alt="" priority />
      <p>{name}</p>
    </Link>
  );
}
