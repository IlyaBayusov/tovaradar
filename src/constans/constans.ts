import img_build from "../../public/category/img_build.png";

const CategoryFirst = {
  build: {
    id: "build",
    img: img_build,
    categories: [
      {
        plumbing: {
          id: "plumbing",
          img: img_build,
          categories: [],
        },
      },
    ],
  },
  build2: {
    id: "build2",
    img: img_build,
    categories: ["plumbing", "electric"],
  },
};

const CategorySecond = {
  plumbing: {
    id: "plumbing",
    img: img_build,
    categories: ["smesiteli", "vanni"],
  },
  electric: {
    id: "build2",
    img: img_build,
    categories: ["plumbing", "electric"],
  },
};
