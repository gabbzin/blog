import { findPostBySlugCached } from "@/lib/post/queries";
import { notFound } from "next/navigation";

type SinglePostProps = {
  slug: string;
};

export async function SinglePost({ slug }: SinglePostProps) {
  const post = await findPostBySlugCached(slug).catch(() => undefined);

  if (!post) {
    notFound();
  }

  return <div>{post ? post.title : "Post não encontrado"}</div>;
}
