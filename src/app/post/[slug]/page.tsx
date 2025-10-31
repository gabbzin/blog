import { findPostBySlugCached } from "@/lib/post/queries";
import { notFound } from "next/navigation";

type PostSlugPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function PostSlugPage({ params }: PostSlugPageProps) {
  const { slug } = await params;

  let post;

  try {
    post = await findPostBySlugCached(slug); // Busca do post pelo slug (Rota dinâmica)
  } catch {
    post = undefined; // Em caso de erro, define post como undefined (para acionar a página 404)
  }

  if (!post) {
    notFound();
  } // Se o post não for encontrado, renderiza a página 404

  return <div>{post.title}</div>;
}
