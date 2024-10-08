import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  subCategory: {
    id: string;
    img: StaticImageData;
    name: string;
  };
  category: string;
};

export default function SubCategoryItem({ subCategory, category }: Props) {
  return (
    <Link
      href={`/${category}/${subCategory.id}`}
      className="flex-[1_1_calc(25%-1rem)] flex flex-col justify-center items-center p-5 shadow-xl bg-[#FCFFFC] rounded-lg"
    >
      <Image src={subCategory.img} alt="" priority />
      <p>{subCategory.name}</p>
    </Link>
  );
}
