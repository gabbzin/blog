import { DrizzlePostRepository } from "./drizzle-post-repository";
import type { PostRepository } from "./postRepository";

export const postRepository: PostRepository = new DrizzlePostRepository();
