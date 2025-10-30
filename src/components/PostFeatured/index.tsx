import { PostCoverImage } from "../PostCoverImage";
import { PostHeading } from "../PostHeading";

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
      <div className="flex flex-col gap-4 sm: justify-center">
        <time className="text-slate-600 text-sm/tight" dateTime="2025-04-20">
          20/04/2025 10:00
        </time>

        <PostHeading url={postLink} as="h1">
          Título do post em destaque na página inicial
        </PostHeading>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
          sapiente minus itaque possimus repellat molestias, labore doloribus
          error provident ad doloremque nemo expedita quidem. Voluptatem, sed
          ducimus! Quia, voluptatum laborum.
        </p>
      </div>
    </section>
  );
}
