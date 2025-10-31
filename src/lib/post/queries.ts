import { postRepository } from "@/repositories/post";
import { cache } from "react";

// Função lib para buscar todos os posts públicos com cache do React
export const findAllPublicPosts = cache(
  async () => await postRepository.findAllPublic()
);
