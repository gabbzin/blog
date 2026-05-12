"use client";

import ErrorMessage from "@/components/ErrorMessage";
import { useEffect } from "react";

type RootErrorPageProps = {
  error: Error;
  reset: () => void;
};

export default function RootErrorPage({ error }: RootErrorPageProps) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <ErrorMessage
      pageTitle="Erro desconhecido"
      contentTitle="501"
      context="Ocorreu um erro do qual a nossa aplicação não conseguiu se recuperar."
    />
  );
}
