import React from "react";
import { notFound } from "next/navigation";
import SubSubCategoryList from "@/components/SubSubCategory/SubSubCategoryList/SubSubCategoryList";
import img_build from "../../../../public/category/img_build.png";
import Link from "next/link";

type Props = {
  params: {
    category: string;
    subcategory: string;
  };
};

const prevCategories = ["construction-and-renovation", "clothing", "books"];

const subSubCategories = {
  plumbing: ["smesiteli", "rakovini"],
  electric: ["rozetki"],
  tshots: ["mans", "womens", "kids"],
  kids: ["azbuka"],
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

const subCategories = {
  "construction-and-renovation": [
    {
      id: "plumbing",
      img: img_build,
      name: "Сантехника",
    },
    {
      id: "electric",
      img: img_build,
      name: "Электрика",
    },
  ],

  clothing: [
    {
      id: "tshots",
      img: img_build,
      name: "Футболки",
    },
  ],

  books: [
    {
      id: "kids",
      img: img_build,
      name: "Детские",
    },
  ],
};

export default function SubCategoryTemp({
  params: { category, subcategory },
}: Props) {
  if (!subSubCategories[subcategory] || !prevCategories.includes(category)) {
    notFound();
  }

  const prevCategory = categories.find((item) => item.id === category);

  const nowCategory = subCategories[category].find(
    (item) => item.id === subcategory
  );

  return (
    <>
      <span className="text-gray-400">
        <Link href="/">Каталог</Link> /{" "}
        <Link href={`/${prevCategory?.id}`}>{prevCategory?.name}</Link> /{" "}
        {nowCategory?.name}
      </span>
      <SubSubCategoryList category={category} subcategory={subcategory} />
    </>
  );
}
