import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
export default function ActiveLink({ children, href }) {
  const router = useRouter();
  const style = {
    background:router.asPath === href ? "#2BBEB8" : null,
    color:router.asPath === href ? "#fff" : "#989898",
    width:"100%"
  };
  const hendleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <Link href={href}>
      <div onClick={hendleClick}  style={style}>
        {children}
      </div>
    </Link>
  );
}
