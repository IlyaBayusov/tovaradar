import React from "react";
import SubSubCategoryItem from "../SubSubCategoryItem/SubSubCategoryItem";
import { StaticImageData } from "next/image";
import img_build from "../../../../public/category/img_build.png";

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
  subcategory: string;
};

const subSubCategory: IArrCategory = {
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

export default function SubSubCategoryList({ category, subcategory }: Props) {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex flex-wrap justify-between items-center gap-4 w-full">
        {subSubCategory[subcategory].map((item) => (
          <SubSubCategoryItem
            key={item.id}
            id={item.id}
            img={item.img}
            name={item.name}
            prevCategory={category}
          />
        ))}
      </div>
    </div>
  );
}
