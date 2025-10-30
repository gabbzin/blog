import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { PostCoverImage } from "@/components/PostCoverImage";
import { PostHeading } from "@/components/PostHeading";
import { PostsList } from "@/components/PostsList";
import { SpinLoader } from "@/components/SpinLoader";
import { Suspense } from "react";

export default async function Home() {
  return (
    <Container>
      <Header />

      <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
        <PostCoverImage
          linkProps={{ href: "images/bryen_5.png" }}
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

          <PostHeading url="#">
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

      <main>
        <Suspense fallback={<SpinLoader />}>
          <PostsList />
        </Suspense>
      </main>
      <footer>
        <h2>Aqui é o FOOTER</h2>
      </footer>
    </Container>
  );
}
