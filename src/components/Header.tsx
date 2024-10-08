import Link from "next/link";
import React from "react";

type Props = {};

export default function Header({}: Props) {
  return (
    <header>
      <Link href={"/"}>Главная</Link>
      <Link href={"/profile"}>Профиль</Link>
    </header>
  );
}
