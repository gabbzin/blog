import { SinglePost } from "@/components/SinglePost";
import { SpinLoader } from "@/components/SpinLoader";
import { findPostBySlugCached } from "@/lib/post/queries";
import { Metadata } from "next";
import { Suspense } from "react";

type PostSlugPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: PostSlugPageProps): Promise<Metadata> {
  const { slug } = await params;

  const post = await findPostBySlugCached(slug).catch(() => undefined);

  return {
    title: post?.title || "Post não encontrado",
    description: post?.excerpt || "Descrição não disponível",
  };
}

export default async function PostSlugPage({ params }: PostSlugPageProps) {
  const { slug } = await params;

  return (
    <Suspense fallback={<SpinLoader className="min-h-20 mb-12" />}>
      <SinglePost slug={slug} />
    </Suspense>
  );
}
