import clsx from "clsx";
import Link from "next/link";

type PostHeadingProps = {
  children: React.ReactNode;
  url: string;
  as?: "h1" | "h2";
};

const headingClassesMaps = {
  h1: "text-3xl/tight font-extrabold sm:text-5xl",
  h2: "text-2xl/tight font-extrabold sm:text-4xl",
};

const commonClasses = "font-extrabold";

export function PostHeading({
  children,
  url,
  as: Tag = "h2",
}: PostHeadingProps) {
  // Qual a diferença entre colocar o map aqui ou fora do componente?
  // Colocar o map fora do componente evita que ele seja recriado a cada renderização do componente,
  // o que pode ser mais eficiente em termos de desempenho, especialmente se o componente for renderizado muitas vezes.
  // No entanto, se o map depender de props ou estado do componente, ele precisa estar dentro do componente para acessar esses valores corretamente.

  return (
    <Tag className={clsx(commonClasses, headingClassesMaps[Tag])}>
      <Link href={url}>{children}</Link>
    </Tag>
  );
}
