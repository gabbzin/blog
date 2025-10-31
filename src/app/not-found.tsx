"use client";

import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="w-1/2">
          <DotLottieReact src={"/404Error.lottie"} loop autoplay/>
        </div>
        <h1 className="text-slate-800 text-xl text-center">
          Desculpe, não conseguimos encontrar essa página :( <br />
          Tente voltar para a tela principal
        </h1>
        <Link
          className="mt-5 text-white bg-slate-800 p-2 rounded-xl"
          href={"/"}
        >
          Voltar para home
        </Link>
      </div>
    </>
  );
}
