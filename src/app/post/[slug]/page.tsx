import { findPostBySlugCached } from "@/lib/post/queries";
import { notFound } from "next/navigation";

type PostSlugPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function PostSlugPage({ params }: PostSlugPageProps) {
  const { slug } = await params;

  const post = await findPostBySlugCached(slug).catch(() => undefined);
  // Pode fazer o mesmo dentro da própria função findPostBySlugCached se preferir

  if (!post) {
    notFound();
  } // Se o post não for encontrado, renderiza a página 404

  return <div>{post.title}</div>;
}
