import { findPostBySlugCached } from "@/lib/post/queries";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PostHeading } from "../PostHeading";
import { PostDate } from "../PostDate";

type SinglePostProps = {
  slug: string;
};

export async function SinglePost({ slug }: SinglePostProps) {
  const post = await findPostBySlugCached(slug).catch(() => undefined);

  if (!post) {
    notFound();
  }

  return (
    <article className="mb-16">
      <header className="group flex flex-col gap-4 mb-4">
        <Image
          className="rounded-xl"
          src={post.coverImageUrl}
          alt={post.title}
          width={1200}
          height={720}
        />

        <PostHeading as="h2" url={`/post/${post.slug}`}>
          {post.title}
        </PostHeading>

        <p>
          {post.author} | <PostDate dateTime={post.createdAt} />
        </p>
      </header>

      <p className="mb-8 text-lg text-slate-600">{post.excerpt}</p>

      <div>
        {post.content}
      </div>
    </article>
  );
}
