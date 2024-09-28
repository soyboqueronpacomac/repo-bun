import Image from "next/image";
import { Button } from "@repo/components/button";
import styles from "./page.module.css";
import { Logo, MenuCentral, Title } from "@repo/components/components";

export default function Home() {
  return (
    <div>
      <Logo
        url="/"
        logo="E-commercer"
        subLogo="shop"
      />
      <MenuCentral />
      <Title title="Pagina de inicio" />
    </div>
  );
}
