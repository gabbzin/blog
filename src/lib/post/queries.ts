import { notFound } from "next/navigation";
import { cache } from "react";
import { postRepository } from "@/repositories/post";

// Função lib para buscar todos os posts públicos com cache do React
export const findAllPublicPostsCached = cache(
  async () => await postRepository.findAllPublic(),
);

export const findPostBySlugCached = cache(async (slug: string) => {
  const post = await postRepository
    .findBySlugPublic(slug)
    .catch(() => undefined);

  if (!post) notFound();

  return post;
});

export const findPostByIdCached = cache(
  async (id: string) => await postRepository.findById(id),
);
