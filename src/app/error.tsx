/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import ErrorMessage from "@/components/ErrorMessage";
import { useEffect } from "react";

type RootErrorPageProps = {
  error: Error;
  reset: () => void;
};

export default function RootErrorPage({ error, reset }: RootErrorPageProps) {
  useEffect(() => {
    console.log(error);
  }, [error]);
  // O erro é capturado aqui e logado no console para fins de depuração.
  // Reset é uma função que pode ser chamada para tentar recarregar a página ou componente que causou o erro.
  return (
    <ErrorMessage
      pageTitle="Erro ao carregar post"
      contentTitle="500"
      context="Erro 500: Ocorreu um erro ao carregar o post"
    />
  );
}
