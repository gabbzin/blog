import { PostCoverImage } from "../PostCoverImage";
import { PostSummary } from "../PostSummary";

export function PostFeatured() {
  const postLink = "/post/titulo-do-post-em-destaque-na-pagina-inicial";
  return (
    <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
      <PostCoverImage
        linkProps={{ href: postLink }}
        imageProps={{
          src: "/images/bryen_5.png",
          width: 1200,
          height: 720,
          alt: "Titulo do post",
          priority: true,
        }}
      />
      <PostSummary
        postLink={postLink}
        postHeading="h1"
        createdAt="2025-04-20"
        excerpt="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa sapiente minus itaque possimus repellat molestias, labore doloribus error provident ad doloremque nemo expedita quidem. Voluptatem, sed ducimus! Quia, voluptatum laborum."
        title="Título do post em destaque na página inicial"
      />
    </section>
  );
}
