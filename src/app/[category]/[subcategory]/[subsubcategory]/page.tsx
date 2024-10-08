import { notFound } from "next/navigation";
import React from "react";
import img_build from "../../../../../public/category/img_build.png";
import Link from "next/link";

type Props = {
  params: {
    category: string;
    subcategory: string;
    subsubcategory: string;
  };
};
const prevCategories = ["construction-and-renovation", "clothing", "books"];

const prevSubCategories = ["plumbing", "vanna", "tshots", "kids"];

const endCategories = [
  "smesiteli",
  "rakovini",
  "rozetki",
  "mans",
  "womens",
  "kids",
  "azbuka",
];

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

const subSubCategory = {
  plumbing: [
    {
      id: "smesiteli",
      img: img_build,
      name: "Смесители",
    },
    {
      id: "rakovini",
      img: img_build,
      name: "Раковины",
    },
  ],

  electric: [
    {
      id: "rozetki",
      img: img_build,
      name: "Розетки",
    },
  ],

  tshots: [
    {
      id: "kids",
      img: img_build,
      name: "Детские футболки",
    },
    {
      id: "mans",
      img: img_build,
      name: "Мужские футболки",
    },
    {
      id: "womens",
      img: img_build,
      name: "Женские футболки",
    },
  ],

  kids: [
    {
      id: "azbuka",
      img: img_build,
      name: "Азбука",
    },
  ],
};

export default function SubSubCategoryTemp({
  params: { category, subcategory, subsubcategory },
}: Props) {
  if (
    !endCategories.includes(subsubcategory) ||
    !prevSubCategories.includes(subcategory) ||
    !prevCategories.includes(category)
  ) {
    notFound();
  }

  const prevSubCategory = categories.find((item) => item.id === category);
  const prevCategory = subCategories[category].find(
    (item) => item.id === subcategory
  );
  const nowCategory = subSubCategory[subcategory].find(
    (item) => item.id === subsubcategory
  );

  {
    return (
      <>
        <span className="text-gray-400">
          <Link href="/">Каталог</Link> /{" "}
          <Link href={`/${prevSubCategory?.id}`}>{prevSubCategory?.name}</Link>{" "}
          /{" "}
          <Link href={`/${prevSubCategory?.id}/${prevCategory?.id}`}>
            {prevCategory?.name}
          </Link>{" "}
          / {nowCategory.name}
        </span>

        <div>Список товаров</div>
      </>
    );
  }
}
