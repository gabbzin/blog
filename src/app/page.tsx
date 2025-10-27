import { PostsList } from "@/components/PostsList";
import { SpinLoader } from "@/components/SpinLoader";
import { postRepository } from "@/repositories/post";
import { Suspense } from "react";

export default async function Home() {
  return (
    <div>
      <header>
        <h1>Aqui é o HEADER</h1>
      </header>
      <main>
        <Suspense fallback={<SpinLoader />}>
          <PostsList />
        </Suspense>
      </main>
      <footer>
        <h1>Aqui é o FOOTER</h1>
      </footer>
    </div>
  );
}
