import img_category_small from "../../../../public/category/img_category_small.png";
import img_build from "../../../../public/category/img_build.png";
import CategoryItem from "../CategoryItem/CategoryItem";

// бд категорий
const categories = [
  {
    id: "construction-and-renovation",
    img: img_build,
    name: "Строительство и ремонт",
  },
  {
    id: "clothing",
    img: img_category_small,
    name: "Одежда",
  },
  {
    id: "books",
    img: img_category_small,
    name: "Книги",
  },
];

export default function CategoryList() {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex flex-wrap justify-between items-center gap-4 w-full">
        {categories.map((item) => (
          <CategoryItem
            key={item.id}
            id={item.id}
            img={item.img}
            name={item.name}
          />
        ))}
      </div>

      {/* <div className="mt-4 flex flex-wrap justify-between items-center gap-4 w-full">
        {categories.map((item) => (
          <CategoryItem
            key={item.id}
            id={item.id}
            img={item.img}
            name={item.name}
          />
        ))}
      </div> */}
    </div>
  );
}
