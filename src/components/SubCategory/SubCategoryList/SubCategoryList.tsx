import React from "react";
import SubCategoryItem from "../SubCategoryItem/SubCategoryItem";
import img_build from "../../../../public/category/img_build.png";
import { StaticImageData } from "next/image";

interface ISubCagoryItem {
  id: string;
  img: StaticImageData;
  name: string;
}

interface IArrCategory {
  [key: string]: ISubCagoryItem[];
}

type Props = {
  category: string;
};

const subCategories: IArrCategory = {
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

export default function SubCategoryList({ category }: Props) {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex flex-wrap justify-between items-center gap-4 w-full">
        {subCategories[category].map((item) => (
          <SubCategoryItem
            key={item.id}
            subCategory={item}
            category={category}
          />
        ))}
      </div>
    </div>
  );
}
