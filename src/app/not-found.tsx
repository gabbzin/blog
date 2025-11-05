import ErrorMessage from "@/components/ErrorMessage";

export default function NotFoundPage() {
  return (
    <ErrorMessage
      pageTitle="Página não encontrada"
      contentTitle="404"
      context="Erro 404: Página não encontrada"
    />
  );
}
