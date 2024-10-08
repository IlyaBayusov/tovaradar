import Image, { StaticImageData } from "next/image";
import Link from "next/link";

//

type Props = {
  id: string;
  img: StaticImageData;
  name: string;
};

export default function CategoryItem({ id, img, name }: Props) {
  return (
    <Link
      href={`/${id}`}
      className="flex-[1_1_calc(25%-1rem)] flex flex-col justify-center items-center p-5 shadow-xl bg-[#FCFFFC] rounded-lg"
    >
      <Image src={img} alt="" priority />
      <p>{name}</p>
    </Link>
  );
}
