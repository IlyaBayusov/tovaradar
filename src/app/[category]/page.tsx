import React from "react";
import img_build from "../../../public/category/img_build.png";
import { notFound } from "next/navigation";
import SubCategoryList from "@/components/SubCategory/SubCategoryList/SubCategoryList";
import Link from "next/link";

type Props = {
  params: {
    category: string;
  };
};

// const сategories = [
//   {
//     id: "construction-and-renovation",
//     img: img_build,
//     name: "Строительство и ремонт",
//   },
//   { id: "clothing", img: img_build, name: "Одежда" },
//   { id: "books", img: img_build, name: "Книги" },
// ];

const subCategories = {
  "construction-and-renovation": ["plumbing", "electric"],

  clothing: ["tshots"],

  books: ["kids"],
};

const categories = [
  {
    id: "construction-and-renovation",
    img: img_build,
    name: "Строительство и ремонт",
  },
  {
    id: "clothing",
    img: img_build,
    name: "Одежда",
  },
  {
    id: "books",
    img: img_build,
    name: "Книги",
  },
];

export default function Categories({ params: { category } }: Props) {
  if (!subCategories[category]) {
    notFound();
  }

  const nowCategory = categories.find((item) => item.id === category);

  return (
    <>
      <span className="text-gray-400">
        <Link href="/">Каталог</Link> / {nowCategory?.name}
      </span>
      <SubCategoryList category={category} />;
    </>
  );
}
