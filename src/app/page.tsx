import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { PostFeatured } from "@/components/PostFeatured";
import { PostsList } from "@/components/PostsList";
import { SpinLoader } from "@/components/SpinLoader";
import { Suspense } from "react";

export default async function Home() {
  return (
    <Container>
      <Header />

      <PostFeatured />

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
